import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.BUCKET_URL || "",
  process.env.BUCKET_ACCESS_KEY || ""
);

export async function uploadToSupabase(file: File, bucketName: string): Promise<string | null> {
  try {
    const uniqueFilename = `${uuidv4()}_${file.name}`;
    console.log(`Uploading file with filename: ${uniqueFilename}`);

    const arrayBuffer = await file.arrayBuffer();
    const fileContent = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(uniqueFilename, fileContent, {
        contentType: file.type,
        upsert: true,
      });

    if (uploadError) {
      console.error("Error uploading file:", uploadError);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(uniqueFilename);

    return publicUrlData?.publicUrl || null;
  } catch (error) {
    console.error("Error in uploadToSupabase:", error);
    return null;
  }
}
