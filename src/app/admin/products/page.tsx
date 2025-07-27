'use client'

const dummyProducts = [
  { id: 1, name: 'Product A', price: '$20' },
  { id: 2, name: 'Product B', price: '$30' },
]

const ProductsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Products</h1>
      <ul className="space-y-2">
        {dummyProducts.map((product) => (
          <li key={product.id} className="border p-2 rounded">
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage