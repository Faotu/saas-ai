"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/src/lib/content-template";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import Editor from "./_components/editor";

interface templateSlugProps {
  templateSlug: string;
}
const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setisLoading] = useState(false);
  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );
  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded ">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>

      <form>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5 ">
                  <Input name="title"></Input>
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-5" type="submit">
          {isLoading ? (
            <Loader className="animate-spin"></Loader>
          ) : (
            "Generate AI Content"
          )}
        </Button>
      </form>
      <div className="mt-10 mb-10">
        <Editor value={isLoading ? "Generating..." : "aiOutPut"} />
      </div>
    </div>
  );
};

export default TemplatePage;
