import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  
  export function AccordionComponent() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="">
          <AccordionTrigger>Do I need to have prior Product Management and Project Management experience to enroll in the program?</AccordionTrigger>
          <AccordionContent className="text-black" >
         No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="">
          <AccordionTrigger>What is the minimum system configuration required?</AccordionTrigger>
          <AccordionContent>
            Some of the configuration required will be told by the team of the accredian
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  