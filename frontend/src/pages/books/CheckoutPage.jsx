import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
  const { currentUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (data) => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Cart is empty",
        text: "Failed to place an order!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
      });
    } else {
      const newOrder = {
        name: data.name,
        email: currentUser?.email,
        address: {
          city: data.city,
          country: data.country,
          state: data.state,
          zipcode: data.zipcode
        },
        phone: data.phone,
        productIds: cartItems.map(item => item?._id),
        totalPrice: totalPrice,
      };

      try {
        await createOrder(newOrder).unwrap();
        Swal.fire({
          title: "Confirmed Order",
          text: "Your order placed successfully!",
          icon: "success",
          confirmButtonColor: "green",
          confirmButtonText: "Congratulations!"
        });
        navigate("/orders");
      } catch (error) {
        console.error("Error placing order", error);
        alert("Failed to place an order");
      }
    }
  };

  if (isLoading) return <div className="text-center text-lg py-10">Loading...</div>;

  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="mb-6">
              <h2 className="font-bold text-2xl text-gray-800">Cash On Delivery</h2>
              <p className="text-gray-600 mt-1">Total Price: <span className="font-semibold">${totalPrice}</span></p>
              <p className="text-gray-600">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-6 lg:grid-cols-3"
              >
                {/* Left Column - Info */}
                <div className="text-gray-700">
                  <p className="font-semibold text-lg">Personal Details</p>
                  <p className="text-sm text-gray-500 mt-1">Please fill out all the fields.</p>
                </div>

                {/* Right Column - Form */}
                <div className="lg:col-span-2">
                  <div className="grid gap-5 md:grid-cols-5">
                    {/* Full Name */}
                    <div className="md:col-span-5">
                      <label className="block font-medium text-gray-700">Full Name</label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-5">
                      <label className="block font-medium text-gray-700">Email Address</label>
                      <input
                        type="text"
                        id="email"
                        disabled
                        defaultValue={currentUser?.email}
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-100 shadow-sm cursor-not-allowed"
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-5">
                      <label className="block font-medium text-gray-700">Phone Number</label>
                      <input
                        {...register("phone", { required: true })}
                        type="number"
                        id="phone"
                        placeholder="+123 456 7890"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* Address */}
                    <div className="md:col-span-3">
                      <label className="block font-medium text-gray-700">Address / Street</label>
                      <input
                        {...register("address", { required: true })}
                        type="text"
                        id="address"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* City */}
                    <div className="md:col-span-2">
                      <label className="block font-medium text-gray-700">City</label>
                      <input
                        {...register("city", { required: true })}
                        type="text"
                        id="city"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* Country */}
                    <div className="md:col-span-2">
                      <label className="block font-medium text-gray-700">Country / Region</label>
                      <input
                        {...register("country", { required: true })}
                        type="text"
                        id="country"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.country && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* State */}
                    <div className="md:col-span-2">
                      <label className="block font-medium text-gray-700">State / Province</label>
                      <input
                        {...register("state", { required: true })}
                        type="text"
                        id="state"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.state && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* Zipcode */}
                    <div className="md:col-span-1">
                      <label className="block font-medium text-gray-700">Zipcode</label>
                      <input
                        {...register("zipcode", { required: true })}
                        type="text"
                        id="zipcode"
                        className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                      {errors.zipcode && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                    </div>

                    {/* Checkbox */}
                    <div className="md:col-span-5 mt-2">
                      <label className="inline-flex items-center">
                        <input
                          onChange={(e) => setIsChecked(e.target.checked)}
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">
                          I agree to the{" "}
                          <Link className="underline text-blue-600">Terms & Conditions</Link> and{" "}
                          <Link className="underline text-blue-600">Shopping Policy</Link>.
                        </span>
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-5 text-right">
                      <button
                        disabled={!isChecked}
                        className={`px-6 py-2 font-semibold text-white rounded-lg transition-colors duration-200 
                          ${isChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                      >
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
