
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "./ui/badge"
import { brandsFilter, genderFilter, priceFilter, typesFilter } from "@/listing/data/data"

export function Filter() {
    return (
        <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["item-1"]}
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-black text-lg hover:no-underline">Gender</AccordionTrigger>
                <AccordionContent className="flex flex-row gap-4 text-balance">
                    {genderFilter.map((gender) => (<Badge variant="outline" className="text-[18px] rounded-none hover:underline cursor-pointer">{gender?.name}</Badge>))}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="font-black text-lg hover:no-underline">Brand</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-4 text-balance w-full">
                    {brandsFilter.map((brand) => (<Badge variant="outline" className="text-[18px] rounded-none hover:underline cursor-pointer">{brand?.name}</Badge>))}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="font-black text-lg hover:no-underline">Type</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-4 text-balance w-full">
                    {typesFilter.map((type) => (<Badge variant="outline" className="text-[18px] rounded-none hover:underline cursor-pointer">{type?.name}</Badge>))}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="font-black text-lg hover:no-underline"><p>Price  <span className="text-xs">(GH₵)</span></p></AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-4 text-balance w-full">
                    {priceFilter.map((price) => (<Badge variant="outline" className="text-[18px] rounded-none hover:underline cursor-pointer">{price?.name}</Badge>))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

