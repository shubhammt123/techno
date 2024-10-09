import React from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaPhone, FaAddressCard, FaCity } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const Cart = () => {

  const { cartItem } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      userId: user.id,
      customerName: formData.get('customerName'),
      customerContactNumber: formData.get('customerContactNumber'),
      address: `${formData.get('address')}, ${formData.get('city')}, ${formData.get('state')}`,
      pinCode: formData.get('pinCode'),
      products: cartItem,
    };
    try {
      const stripe = await loadStripe('pk_test_51PQ23NKhZAmovhQkSKdZwZLJ8t4f7QKqZZ9BLNfT86xtaPAEEp5ICEWuKa1JpEvTXK7lxuHb4sjUk2wZ6FAU0uOX00KiQ8o3k8');
      const response = await axios.post(`http://localhost:5000/create-checkout-session`, orderDetails);
      const result = stripe.redirectToCheckout({ sessionId: response.data.id });
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">

        <div className="cart-items overflow-y-auto h-[530px]">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="mb-4">
            {cartItem.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
               
                <img
                  src={`http://localhost:5000/${item.productUrl}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                
                <div className="flex-1">
                  <div>{item.name}</div>
                  <div>Rs. {item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className=" bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <div className="font-bold mb-4">Total: Rs. {totalPrice}</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border p-2 rounded">
              <FaUser className="mr-2" />
              <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                required
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="flex items-center border p-2 rounded">
              <FaPhone className="mr-2" />
              <input
                type="text"
                name="customerContactNumber"
                placeholder="Customer Phone Number"
                required
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="flex items-center border p-2 rounded">
              <FaAddressCard className="mr-2" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="flex items-center border p-2 rounded">
              <FaCity className="mr-2" />
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="flex items-center border p-2 rounded">
              <FaCity className="mr-2" />
              <input
                type="text"
                name="state"
                placeholder="State"
                required
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="flex items-center border p-2 rounded">
              <FaCity className="mr-2" />
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                required
                className="flex-1 p-2 border rounded"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
