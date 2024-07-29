import { contentTemplates } from "@/src/lib/content-template";
import Link from "next/link";
import React from "react";

function TemplateList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
      {contentTemplates.map((template) => (
        <div key={template.slug}>
          <Link href="/">
            <template.icon></template.icon>
            <h2>{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TemplateList;
