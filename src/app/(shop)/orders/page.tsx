import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";
import Title from "@/components/ui/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders list",
  description: "Check your orders list",
};

const OrdersPage = () => {
  return (
    <>
      <Title title="Orders" />

      <div className="px-0 md:px-20 2xl:px-80">
        <table className="min-w-full border">
          <thead className="bg-orange-100 border-b ">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Status
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-orange-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <IoCardOutline className="text-green-800" />
                <span className="mx-2 text-green-800">Paid</span>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 text-end">
                <Link href="/orders/123" className="hover:underline">
                  See order detail
                </Link>
              </td>
            </tr>

            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-orange-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <IoCardOutline className="text-yellow-800" />
                <span className="mx-2 text-yellow-800">In process</span>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 text-end">
                <Link href="/orders/123" className="hover:underline">
                  See order detail
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersPage;
