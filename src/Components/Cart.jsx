import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(null);
    const cart = useSelector((state) => state.cart.items);
    useEffect(() => {
        const totalPrice = cart.reduce((acc, curr) => {
          const price = parseInt(curr.price.replace(/[^\d]/g, ""), 10);
          return acc + price;
        }, 0);
        setSubtotal(totalPrice);
    },[])
  return (
    <div className='container w-6/12 mx-auto px-4 py-6 bg-white rounded-md'>
      <h2 className='text-lg font-medium text-gray-900 mb-6'>Shopping Cart</h2>

      <div className='mt-8'>
        <div className='flow-root'>
          <ul role='list' className='-my-6 divide-y divide-gray-200'>
            {cart.map((item, index) => (
              <li className='flex py-6' key={index}>
                <div className='h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200'>
                  <img
                    src='https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
                    alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
                    className='h-full w-full object-cover'
                  />
                </div>

                <div className='ml-4 flex flex-1 flex-col'>
                  <div>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <h3>
                        <a href='#'>{item.name}</a>
                      </h3>
                      <p className='ml-4'>{item.price}</p>
                    </div>
                    <p className='mt-1 text-sm text-gray-500'>
                      {item.description}
                    </p>
                  </div>
                  <div className='flex flex-1 items-end justify-between text-sm'>
                    <p className='text-gray-500'>Qty 1</p>
                    <div className='flex'>
                      <button
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtotal */}
      <div className='border-t border-gray-200 mt-6 pt-6'>
        <div className='flex justify-between  text-2xl font-medium text-gray-900'>
          <p>Subtotal</p>
          <p>₹{subtotal}</p>
        </div>
        <p className='mt-0.5 text-sm text-gray-500'>
          Shipping and taxes calculated at checkout.
        </p>
        <div className='mt-6'>
          <a
            href='#'
            className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
            Checkout
          </a>
        </div>
        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
          <p>
            or{" "}
            <button
              type='button'
              className='font-medium text-indigo-600 hover:text-indigo-500'>
              Continue Shopping<span aria-hidden='true'> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
