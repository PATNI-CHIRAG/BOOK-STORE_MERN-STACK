import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {
  const { currentUser } = useAuth();

  const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

  if (isLoading) return <div className="text-center text-lg py-10">Loading...</div>;
  if (isError) return <div className="text-center text-red-500 py-10">Error getting orders data</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">No orders found!</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Order number badge */}
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-full mb-4">
                # {index + 1}
              </span>

              {/* Order details */}
              <h3 className="text-lg font-bold text-gray-800 mb-1">Order ID: <span className="text-gray-600">{order._id}</span></h3>
              <p className="text-gray-700"><strong>Name:</strong> {order.name}</p>
              <p className="text-gray-700"><strong>Email:</strong> {order.email}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {order.phone}</p>
              <p className="text-gray-800 font-semibold mt-1">Total Price: ${order.totalPrice}</p>

              {/* Address */}
              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Address:</h4>
                <p className="text-gray-600">
                  {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              {/* Products */}
              <div className="mt-3">
                <h4 className="font-semibold text-gray-800">Products ID:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {order.productIds.map((productId) => (
                    <li key={productId} className="hover:text-indigo-600 transition-colors">{productId}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
