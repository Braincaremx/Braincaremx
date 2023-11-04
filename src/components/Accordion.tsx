import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { Fragment } from "react";

interface Props {
  data: {
    title: string;
    description: string;
  }[];
}

export function Accordion({ data }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, i) => {
        return (
          <AccordionItem value={`item-${i.toFixed()}`}>
            <AccordionTrigger className="text-left font-bold">{item.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2 text-container" dangerouslySetInnerHTML={{__html: item.description}}/>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}