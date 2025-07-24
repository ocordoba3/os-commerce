import { Gender } from "@/generated/prisma";

export interface Pagination {
  page?: string;
  limit?: string;
  gender?: Gender;
}
