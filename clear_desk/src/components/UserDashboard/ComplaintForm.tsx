"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { validateComplaintPayload } from "@/lib/validation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";

function ComplaintForm() {
  const queryClient = useQueryClient();
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const user_id = "8b61d408-50c7-43b9-a5fc-93ec22740cd7";  

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      console.log("Submitting form data:", formData);
      const response = await fetch("/api/complaint", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to submit complaint");
      }
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message || "Complaint submitted successfully!");
      queryClient.invalidateQueries({ queryKey: ["complaints", user_id] }); 
      setImages([]);
      setCategory("");
      setTitle("");
      setDescription("");
      setIsSheetOpen(false);
    },
    onError: (error: any) => {
      console.error("Error submitting complaint:", error);
      toast.error(error.message || "Failed to submit complaint. Please try again.");
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user_id", user_id);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }    
    const validationResult = validateComplaintPayload({
      category,
      title,
      description,
      images,
      user_id,
    });

    console.log("Payload being validated:", {
      category,
      title,
      description,
      images,
      user_id,
    });

    if (!validationResult.success) {
      validationResult.error.errors.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setIsSheetOpen(true)}> <PlusIcon /> File a new complaint </Button>
        </SheetTrigger>
        <SheetContent className="max-h-[100vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Raise a Complaint</SheetTitle>
            <SheetDescription>
              Please fill out the form below to raise a complaint.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="complaint" className="font-bold text-lg">
                Category:
              </Label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="accomodation">Accomodation</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="payments">Payments</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" className="font-bold text-lg">
                Title:
              </Label>
              <Input
                id="title"
                placeholder="Title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="font-bold text-lg">
                Describe your issue in detail ( Max 200 words )
              </Label>
              <Input
                id="description"
                placeholder="Description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="images" className="font-bold text-lg">
                Attach images
              </Label>
              <Input
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="relative w-full h-32">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              ))}
            </div>
            <SheetFooter>
              <Button type="submit" >
                Submit
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ComplaintForm;
