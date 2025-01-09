import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-screen max-w-xl place-content-center px-10 text-center">
      <p className="mr-7 w-auto py-2 text-xl font-black transition-all duration-300 ease-linear md:py-4">
       Page not found because only added one page using kaminari
      </p>
      <div className="mx-auto mt-8 w-full max-w-lg md:mt-0">
        <Button size="lg" className="w-full font-bold" variant="brand">
          <Link href="/" className="pb-1 text-zinc-100 dark:text-zinc-800">
          404
          </Link>{" "}
        </Button>
      </div>
    </div>
  );
}
