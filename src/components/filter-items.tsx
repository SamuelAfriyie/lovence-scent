import { useState } from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";


export const GenderItem = ({ genderFilter, onChange }: { genderFilter: any[], onChange: any }) => {
    const [selected, setSelected] = useState("");

    const handleSelect = (value: string) => {
        onChange({ gender: value?.toLowerCase() });
        setSelected(value);
    }

    const handleClear = (e: any) => {
        e.stopPropagation();
        handleSelect("");
    }

    return (
        <AccordionItem value="item-1">
            <AccordionTrigger className="font-black text-lg hover:no-underline">
                <div className="flex space-x-3 items-center cursor-pointer">
                    <p>Gender</p>
                    <p className={cn("text-primary font-bold text-sm", selected === "" && "hidden")} onClick={handleClear}>Clear</p>
                </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-row gap-4 text-balance" >
                {genderFilter.map((gender: any) => (<Badge key={gender?.name} variant="outline" className={cn("text-[18px] rounded-none hover:underline cursor-pointer", selected === gender?.name && "bg-accent/20")} onClick={() => handleSelect(gender?.name)}>{gender?.name}</Badge>))}
            </AccordionContent>
        </AccordionItem>
    )
}

export const BrandItem = ({ brandFilter, onChange }: { brandFilter: any[], onChange: any }) => {
    const [selected, setSelected] = useState("");

    const handleSelect = (brand: string) => {
        onChange({ brand });
        setSelected(brand);
    }

    const handleClear = (e: any) => {
        e.stopPropagation();
        handleSelect("");
    }

    return (
        <AccordionItem value="item-2">
            <AccordionTrigger className="font-black text-lg hover:no-underline">
                <div className="flex space-x-3 items-center cursor-pointer">
                    <p>Brand</p>
                    <p className={cn("text-primary font-bold text-sm", selected === "" && "hidden")} onClick={handleClear}>Clear</p>
                </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4 text-balance w-full" >
                {brandFilter.map((brand: any) => (<Badge key={brand} variant="outline" className={cn("text-[18px] rounded-none hover:underline cursor-pointer", selected === brand && "bg-accent/20")} onClick={() => handleSelect(brand)}>{brand}</Badge>))}
            </AccordionContent>
        </AccordionItem>
    )
}

export const TypeItem = ({ typefilter, onChange }: { typefilter: any[], onChange: any }) => {
    const [selected, setSelected] = useState("");

    const handleSelect = (type: string) => {
        onChange({ type });
        setSelected(type);
    }

    const handleClear = (e: any) => {
        e.stopPropagation();
        handleSelect("");
    }

    return (
        <AccordionItem value="item-3">
            <AccordionTrigger className="font-black text-lg hover:no-underline">
                <div className="flex space-x-3 items-center cursor-pointer">
                    <p>Type</p>
                    <p className={cn("text-primary font-bold text-sm", selected === "" && "hidden")} onClick={handleClear}>Clear</p>
                </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4 text-balance w-full" >
                {typefilter.map((type: any) => (<Badge key={type} variant="outline" className={cn("text-[18px] rounded-none hover:underline cursor-pointer", selected === type && "bg-accent/20")} onClick={() => handleSelect(type)}>{type}</Badge>))}
            </AccordionContent>
        </AccordionItem>
    )
}

export const PriceItem = ({ priceFilter, onChange }: { priceFilter: any[], onChange: (value: any) => void }) => {

    const [selected, setSelected] = useState<any>();

    const handleSelect = (price: any) => {
        onChange({ price: { min: price?.min ?? 0, max: price?.max ?? 0 } });
        setSelected(price);
    }

    const handleClear = (e: any) => {
        e.stopPropagation();
        onChange({ price: { min: 0, max: 10000 } });
        setSelected(undefined);
    }

    return (
        <AccordionItem value="item-4">
            <AccordionTrigger className="font-black text-lg hover:no-underline">
                <div className="flex space-x-3 items-center cursor-pointer">
                    <p>Price  <span className="text-xs">(GH₵)</span></p>
                    <p className={cn("text-primary font-bold text-sm", selected === undefined && "hidden")} onClick={handleClear}>Clear</p>
                </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4 text-balance w-full">
                {priceFilter.map((price) => (<Badge variant="outline" className={cn("text-[18px] rounded-none hover:underline cursor-pointer", selected === price && "bg-accent/20")} onClick={() => handleSelect(price)}>{price?.name}</Badge>))}
            </AccordionContent>
        </AccordionItem>
    )
}