import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ComplaintCardProps {
    title: string;
    description: string;
    images: string[];
    category: string;
    status: string;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({ title, description, images, category, status }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <strong>Category:</strong> {category}
                </div>
                <div>
                    <strong>Status:</strong> {status}
                </div>
                <div>
                    <strong>Images:</strong>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export default ComplaintCard;
