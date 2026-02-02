
import {
    Accordion,
} from "@/components/ui/accordion"
import { genderFilter, priceFilter } from "@/listing/data/data"
import { BrandItem, GenderItem, PriceItem, TypeItem } from "./filter-items"

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
            <PriceItem priceFilter={priceFilter} onChange={onChange} />
        </Accordion>
    )
}
