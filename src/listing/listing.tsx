import { Filter } from "@/components/filter";
import NavBar from "@/components/nav-bar";
import { dummyProducts } from "@/components/popular-product-section";
import { ProductCardV2 } from "@/components/product-card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
const Listing = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>("grid");

    return (
        <main className="bg-white min-h-screen flex flex-col ">
            <NavBar className={cn("w-full mt-7")} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <header className="w-full my-12">
                    <div className="w-full flex items-center">
                        <h1 className="text-3xl text-black flex-1">Best-Selling Fragrances for Women & Men</h1>
                        <aside className="px-4 py-2 ring ring-gray-300 space-x-2 flex md:hidden">
                            <div className="size-6 rounded-full bg-gray-100 flex items-center justify-center"><p className="text-xs">5</p></div>
                            <p className="font-bold">Filter</p>
                        </aside>
                    </div>
                    <p className="dark:text-black">1-60 of 7072 Results</p>
                </header>
                <section className="flex w-full space-x-4">
                    <aside className="md:w-75 hidden md:inline-block">
                        <p className="text-lg text-black">Filter By</p>
                        <Filter />
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
