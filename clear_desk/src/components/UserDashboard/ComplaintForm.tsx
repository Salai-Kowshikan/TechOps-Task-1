"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
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
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    console.log("Form Data:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    setImages([]);
    setCategory("");
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Raise a Complaint</SheetTitle>
            <SheetDescription>
              Please fill out the form below to raise a complaint.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="complaint">Category: </Label>
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
            <div>
              <Label htmlFor="title">Title: </Label>
              <Input
                id="title"
                placeholder="Title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="description">
                Describe your issue in detail ( Max 200 words )
              </Label>
              <Input
                id="description"
                placeholder="Description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="images">Attach images</Label>
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
              <SheetClose asChild>
                <Button type="submit">Submit</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ComplaintForm;
