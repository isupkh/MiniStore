'use client';

const dummyProducts = [
  { id: 1, name: 'Product A', price: '$20' },
  { id: 2, name: 'Product B', price: '$30' },
];

const ProductsPage = () => {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        All Products
      </h1>
      <ul className="space-y-3">
        {dummyProducts.map((product) => (
          <li
            key={product.id}
            className="border p-3 rounded shadow-sm bg-white flex justify-between"
          >
            <span className="font-semibold">{product.name}</span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;