"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";

interface Props {
  totalPages: number;
}

const Pagination = ({ totalPages }: Props) => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  if (isNaN(currentPage)) {
    redirect(path);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function createURL(page: number) {
    if ((isFirstPage && page === 1) || (isLastPage && page === totalPages)) {
      return "";
    }
    return `${path}?page=${page}`;
  }

  return (
    <nav className="w-full mt-16 flex justify-center">
      <div>
        <Link
          className={cn(
            "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-divght-300",
            {
              "pointer-events-none": isFirstPage,
              "opacity-40": isFirstPage,
            }
          )}
          aria-disabled={isFirstPage}
          href={createURL(currentPage - 1)}
          aria-label="Previous"
        >
          <ArrowLeft />
        </Link>
      </div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((val) => (
        <div key={val}>
          <Link
            className={cn(
              "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr  p-0 text-sm  shadow-md  transition duration-150 ease-in-out",
              {
                "from-orange-600 to-orange-400 shadow-pink-500/20 text-white":
                  val === currentPage,
              }
            )}
            href={createURL(val)}
          >
            {val}
          </Link>
        </div>
      ))}
      <div>
        <Link
          className={cn(
            "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-divght-300",
            {
              "pointer-events-none": isLastPage,
              "opacity-40": isLastPage,
            }
          )}
          aria-disabled={isLastPage}
          href={createURL(currentPage + 1)}
          aria-label="Next"
        >
          <ArrowRight />
        </Link>
      </div>
    </nav>
  );
};

export default Pagination;
