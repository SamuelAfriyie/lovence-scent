import ProductCard from './product-card';
import image1 from "../assets/img-1.png"
import image2 from "../assets/img2.jpeg"
import image3 from "../assets/img3.avif"
import image4 from "../assets/img4.jpg"

const dummyProducts: any[] = [
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image1
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image1
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image2
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image2
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image3
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image3
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image4
  },
  {
    id: "102912",
    name: "Lorem Ipsum is simply dummy text or the printino.",
    price: "$200.00",
    imageUrl: image4
  },
];

const PopularProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">
            Popular Products
          </h2>
          {/* <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div> Blue separator line */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
