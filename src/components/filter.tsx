
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "./ui/badge"
import { genderFilter, priceFilter } from "@/listing/data/data"
import { BrandItem, GenderItem, TypeItem } from "./filter-items"

interface FilterProps {
    brandsFilter: string[],
    typesFilter: string[],
    onChange: (data: any) => void
}

export function Filter({ brandsFilter, typesFilter, onChange }: FilterProps) {
    return (
        <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["item-1"]}
        >
            <GenderItem genderFilter={genderFilter} onChange={onChange} />
            <BrandItem brandFilter={brandsFilter} onChange={onChange} />
            <TypeItem typefilter={typesFilter} onChange={onChange} />
            <AccordionItem value="item-4">
                <AccordionTrigger className="font-black text-lg hover:no-underline"><p>Price  <span className="text-xs">(GH₵)</span></p></AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-4 text-balance w-full">
                    {priceFilter.map((price) => (<Badge variant="outline" className="text-[18px] rounded-none hover:underline cursor-pointer">{price?.name}</Badge>))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
