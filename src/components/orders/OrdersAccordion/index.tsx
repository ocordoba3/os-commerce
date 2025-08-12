import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { ReactNode } from "react";
import OrdersProductsGrid from "../OrdersProductsGrid";

interface AccordionItemInterface {
  key: "summary" | "delivery";
  label: string;
  Component: ReactNode;
}

const OrdersAccordion = () => {
  const accordionItems: AccordionItemInterface[] = [
    {
      key: "summary",
      label: "Summary",
      Component: <OrdersProductsGrid />,
    },
    {
      key: "delivery",
      label: "Delivery details",
      Component: <></>,
    },
  ];

  return (
    <Accordion
      defaultValue={["summary", "delivery"]}
      type="multiple"
      className="w-full"
    >
      {accordionItems.map(({ key, label, Component }) => (
        <AccordionItem key={key} value={key}>
          <AccordionTrigger>
            <h2 className="font-bold text-2xl mb-4">{label}</h2>
          </AccordionTrigger>
          <AccordionContent>{Component}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default OrdersAccordion;
