import React from 'react'

const Services = () => {
  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Services</h1>
          <p className='text-lg text-gray-600'>
            Discover the exclusive services that make your food journey seamless and delightful.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold text-gray-800'>Fast Delivery</h2>
            <p className='text-gray-600 mt-2'>
              Enjoy piping-hot meals delivered to your doorstep without delay.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold text-gray-800'>Variety of Cuisines</h2>
            <p className='text-gray-600 mt-2'>
              From local delicacies to global flavors, we have it all for you.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold text-gray-800'>Contactless Payment</h2>
            <p className='text-gray-600 mt-2'>
              Safe and secure payment options for a worry-free checkout experience.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold text-gray-800'>24/7 Customer Support</h2>
            <p className='text-gray-600 mt-2'>
              Our team is available around the clock to assist you with any issues.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold text-gray-800'>Exclusive Deals</h2>
            <p className='text-gray-600 mt-2'>
              Avail special discounts and offers on your favorite meals.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold text-gray-800'>Easy Ordering</h2>
            <p className='text-gray-600 mt-2'>
              Place orders effortlessly with our intuitive and user-friendly platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

