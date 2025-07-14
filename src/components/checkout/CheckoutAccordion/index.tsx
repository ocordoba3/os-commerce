import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import AddressForm from "../AddressForm";
import Summary from "../Summary";
import { ReactNode } from "react";

interface AccordionItemInterface {
  key: "summary" | "delivery";
  label: string;
  Component: ReactNode;
}

const CheckoutAccordion = () => {
  const accordionItems: AccordionItemInterface[] = [
    {
      key: "summary",
      label: "Summary",
      Component: <Summary />,
    },
    {
      key: "delivery",
      label: "Delivery details",
      Component: <AddressForm />,
    },
  ];

  return (
    <Accordion
      defaultValue={["summary", "delivery"]}
      type="multiple"
      className="w-full order-2 md:order-1"
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

export default CheckoutAccordion;
