'use client'

const dummyOrders = [
  {
    id: 1,
    customer: 'John Doe',
    products: ['Product A', 'Product B'],
    total: '$50',
  },
]

const OrdersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      {dummyOrders.map((order) => (
        <div key={order.id} className="border p-4 rounded mb-4">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Products:</strong> {order.products.join(', ')}</p>
          <p><strong>Total:</strong> {order.total}</p>
        </div>
      ))}
    </div>
  )
}

export default OrdersPage