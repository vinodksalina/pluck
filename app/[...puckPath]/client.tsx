"use client";
import Link  from "next/link"
import "@/app/globals.css"
import { Button } from "@/components/ui/button"

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "@/puck.config";

export function Client({ data }: { data: Data }) {
  return<><Render config={config} data={data} />
      <Button asChild className="ml-[45vw]">
      <Link href="/edit">Edit</Link>
  </Button>
  </> ;
}
