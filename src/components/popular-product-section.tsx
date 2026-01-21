import ProductCard from './product-card';
import dummyProducts from "../data/products.json";
import { NavLink } from 'react-router';

const PopularProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-muted uppercase tracking-wider">
            Popular Products
          </h2>
          <NavLink to={"/shopping"} className="text-muted mx-auto underline cursor-pointer">View All</NavLink>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyProducts.filter((p) => p.id <= 8).map((product) => (
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
