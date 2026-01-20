import ProductCard from './product-card';
import image1 from "../assets/img-1.png"
import image2 from "../assets/img2.jpeg"
import image3 from "../assets/img3.avif"
import image4 from "../assets/img4.jpg"
import type { ProductSchema } from '@/lib/schema';

export const dummyProducts: ProductSchema[] = [
  {
    id: "102912",
    name: "Bright Crystal.",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: "https://img.fragrancex.com/images/products/sku/small/61100w.webp"
  },
  {
    id: "102913",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: "https://img.fragrancex.com/cdn-cgi/image/onerror=redirect,fit=scale-down,width=640,format=webp/images/products/sku/large/jchoo17w.webp"
  },
  {
    id: "102914",
    name: "Light Blue",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: "https://img.fragrancex.com/images/products/sku/small/884w.webp"
  },
  {
    id: "102915",
    name: "Eternity",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: "https://img.fragrancex.com/images/products/sku/small/352w.webp"
  },
  {
    id: "102916",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: image1
  },
  {
    id: "102917",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: image3
  },
  {
    id: "102918",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: image2
  },
  {
    id: "102919",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: 200.00,
    brand: "Kelvin Klein",
    imageUrl: image4
  },
];

const PopularProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-muted uppercase tracking-wider">
            Popular Products
          </h2>
          {/* <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div> Blue separator line */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyProducts.map((product) => (
            <ProductCard
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
