'use client';

const dummyOrders = [
  {
    id: 1,
    customer: 'John Doe',
    products: ['Product A', 'Product B'],
    total: '$50',
  },
];

const OrdersPage = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Orders
      </h1>
      {dummyOrders.map((order) => (
        <div
          key={order.id}
          className="border p-4 rounded mb-4 shadow-sm bg-white"
        >
          <p className="mb-2">
            <strong>Customer:</strong> {order.customer}
          </p>
          <p className="mb-2">
            <strong>Products:</strong> {order.products.join(', ')}
          </p>
          <p>
            <strong>Total:</strong> {order.total}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;