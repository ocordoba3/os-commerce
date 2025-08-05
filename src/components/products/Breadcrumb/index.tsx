"use client";

import { Gender } from "@/generated/prisma";
import { PATHS } from "@/utils/paths";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  gender: string;
  slug: string;
}

const Breadcrumb = ({ gender, slug }: Props) => {
  return (
    <nav className="w-full" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2 ">
        <li>
          <Link
            href={PATHS.gender(gender as Gender)}
            className="flex items-center text-sm font-medium text-gray-900 capitalize"
          >
            {gender}
          </Link>
        </li>
        <li className="flex gap-2 text-gray-500 font-medium">
          <ChevronRight />
          <div className="flex items-center capitalize">
            {slug.replaceAll("_", " ")}
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
