"use client";

import { contentTemplates } from "@/src/lib/content-template";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);

  // Search Input
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList.map((template) => (
        <div key={template.slug}>
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-whire w-full rounded-lg h-[200]py-4 px-4 text-center flex-col justify-center"
          >
            <template.icon className="h-12 w-12 mx-auto"></template.icon>
            <h2 className="font-semibold mt-5 ">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
