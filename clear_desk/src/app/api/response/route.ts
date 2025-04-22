import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-client';
import { format } from 'date-fns';

export async function POST(req: NextRequest) {
    try {
        const { complaint_id, role, message } = await req.json();

        if (!complaint_id || !role || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('Received complaint_id:', complaint_id);

        const complaint = await prisma.complaint_responses.findUnique({
            where: { complaint_id },
        });

        const newResponse = {
            message,
            sent_by: role,
            created_at: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX"),
        };

        if (!complaint) {
            console.log('No existing responses found. Creating a new record.'); 

            await prisma.complaint_responses.create({
                data: {
                    complaint_id,
                    responses: [JSON.parse(JSON.stringify(newResponse))],
                },
            });

            return NextResponse.json({ success: true, updatedResponses: [newResponse] });
        }

        const existingResponses = complaint.responses || [];

        const updatedResponses = [...existingResponses, JSON.parse(JSON.stringify(newResponse))];

        await prisma.complaint_responses.update({
            where: { complaint_id },
            data: { responses: updatedResponses },
        });

        return NextResponse.json({ success: true, updatedResponses });
    } catch (error) {
        console.error('Error handling POST request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const complaint_id = searchParams.get('complaint_id');

        if (!complaint_id) {
            return NextResponse.json({ error: 'Missing complaint_id' }, { status: 400 });
        }

        console.log('Fetching responses for complaint_id:', complaint_id); 

        const complaint = await prisma.complaint_responses.findUnique({
            where: { complaint_id },
        });

        if (!complaint) {
            return NextResponse.json({ error: 'Complaint not found' }, { status: 404 });
        }

        const responses = (complaint.responses || []).sort(
            (a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );

        return NextResponse.json({ success: true, responses });
    } catch (error) {
        console.error('Error handling GET request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
