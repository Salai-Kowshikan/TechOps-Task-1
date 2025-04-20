"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { complaintFormSchema } from "@/lib/validation";
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

function ComplaintForm() {
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      category,
      title,
      description,
      images,
    };

    const result = complaintFormSchema.safeParse(formData);

    if (!result.success) {
      result.error.errors.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }

    console.log("Form Data:", formData);

    setImages([]);
    setCategory("");
    setTitle("");
    setDescription("");
    toast.success("Complaint submitted successfully!");
    setIsSheetOpen(false);
  };

  return (
    <div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setIsSheetOpen(true)}>Open</Button>
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
              <Button type="submit">Submit</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ComplaintForm;
