import BottomSheet from "@/components/bottom-sheet";
import { Filter } from "@/components/filter";
import NavBar from "@/components/nav-bar";
import products from "../data/products.json";
import { ProductCardV2 } from "@/components/product-card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const Listing = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>("grid");
    const [dummyProducts, setDummyProduct] = useState(products);

    const [criteria, setCritera] = useState({
        brand: "",
        gender: "",
        maxPrice: 0,
        type: ""
    })

    const filterProducts = (products: any[], criteria: any) => {
        return products.filter(product => {
            return (
                (!criteria.brand || product.brand === criteria.brand) &&
                (!criteria.type || product.type === criteria.type) &&
                (!criteria.gender || product.gender.includes(criteria.gender)) &&
                (!criteria.maxPrice || product.price <= criteria.maxPrice)
            );
        });
    };

    const handleFilterChange = (data: any) => {
        setCritera((prev) => ({ ...prev, ...data }))
    }

    const checkFilteredCount = () => {
        let count = 0;
        if (criteria.brand !== "") {
            count++;
        }
        if (criteria.gender !== "") {
            count++;
        }
        if (criteria.maxPrice > 0) {
            count++;
        }
        if (criteria.type !== "") {
            count++;
        }
        return count;
    }

    useEffect(() => {
        setDummyProduct((_) => filterProducts(products, criteria));
    }, [criteria])

    return (
        <main className="bg-white min-h-screen flex flex-col ">
            <NavBar className={cn("w-full mt-7 fixed left-0 z-50")} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full lg:mt-24 mb-16">
                <header className="w-full my-12">
                    <div className="w-full flex items-center space-x-3">
                        <h1 className="md:text-[27px] text-muted flex-1 text-xl">Best-Selling Fragrances for Women & Men</h1>
                        {/* shows only on mobile screens */}
                        <BottomSheet
                            title="Filter Fragrances"
                            trigger={
                                <aside className="px-4 py-2 ring ring-gray-300 space-x-2 flex md:hidden">
                                    <div className="size-6 rounded-full bg-gray-100 flex items-center justify-center"><p className="text-xs">{checkFilteredCount()}</p></div>
                                    <p className="font-semibold text-muted hover:text-primary">Filter</p>
                                </aside>
                            }
                        >
                            <Filter brandsFilter={[...new Set(products.map((p) => p.brand))]} typesFilter={[...new Set(products.map((p) => p.type))]} onChange={handleFilterChange} />
                        </BottomSheet>
                    </div>
                    <p className="dark:text-black">1-60 of 7072 Results</p>
                </header>
                <section className="flex w-full space-x-4 items-start">
                    <aside className="md:w-75 hidden md:inline-block lg:sticky lg:top-28 lg:self-start overflow-y-auto max-h-[calc(100vh-120px)]">
                        <p className="text-lg text-black">Filter By</p>
                        <Filter brandsFilter={[...new Set(products.map((p) => p.brand))]} typesFilter={[...new Set(products.map((p) => p.type))]} onChange={handleFilterChange} />
                    </aside>
                    <aside className="flex-1 h-full">
                        <div className="w-full flex items-center justify-end mb-2">
                            <aside className="flex space-x-3">
                                <BsFillGrid3X3GapFill onClick={() => setViewMode('grid')} className={cn("text-gray-400", viewMode === "grid" && "text-gray-600")} />
                                <FaList onClick={() => setViewMode('list')} className={cn("text-gray-400", viewMode === "list" && "text-gray-600")} />
                            </aside>
                        </div>
                        {
                            viewMode === "grid" ? (<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 mb-8">
                                {dummyProducts.map((product) => (
                                    <div key={product.id} className="break-inside-avoid">
                                        <ProductCardV2
                                            className="ring-inset shadow-lg rounded-sm"
                                            viewMode={viewMode}
                                            product={product}
                                        />
                                    </div>
                                ))}
                            </div>)
                                : (
                                    <div className="flex flex-col gap-2 space-y-2 mb-8">
                                        {dummyProducts.map((product) => (
                                            <div key={product.id} className="break-inside-avoid">
                                                <ProductCardV2
                                                    className="ring-inset shadow-lg rounded-sm"
                                                    viewMode={viewMode}
                                                    product={product}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )
                        }

                    </aside>
                </section>
            </div>
        </main>
    )
}

export default Listing;
