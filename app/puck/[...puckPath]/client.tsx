"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "@/puck.config";
import "@/app/globals.css"

import { renderToStaticMarkup } from "react-dom/server";
import { Render } from "@measured/puck";


export function Client({ data }: { path: string; data: Partial<Data> }) {


    return (
    <Puck
      config={config}
      data={data}
      onPublish={
        async (data: never) => {
          const htmlContent = renderToStaticMarkup(
              <html>
              <head>
                  <title>Puck Generated Content</title>
                  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" async></script>
                  <script src="https://cdn.jsdelivr.net/npm/shadcn-ui@0.9.5/dist/index.min.js" async></script>
              </head>
              <body>
              <Render config={config} data={data} />
              </body>
              </html>
    );

    // Create a Blob containing the HTML data.
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element to trigger the download.
    const link = document.createElement("a");
    link.href = url;
    link.download = "puck-content.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}}

    />
  );
}
