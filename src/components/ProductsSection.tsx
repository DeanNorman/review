import ProductCard from "./ProductCard";

const products = [
  {
    image: "/product-radio.png",
    name: "ProComm X500",
    category: "Two-Way Radio",
    price: "$499",
    badge: "Best Seller",
  },
  {
    image: "/product-rugged.png",
    name: "RuggedTab R8",
    category: "Rugged Devices",
    price: "$899",
    badge: "New",
  },
  {
    image: "/product-scanner.png",
    name: "ScanPro 2D Elite",
    category: "2D Scanners",
    price: "$349",
  },
  {
    image: "/product-ptt.png",
    name: "PTT Speaker Mic",
    category: "PTT Accessories",
    price: "$129",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade hardware designed for the most demanding environments.
            All products integrate seamlessly with our cloud platform.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
