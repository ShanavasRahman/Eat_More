import React from "react";

const About = () => {
  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Eat More
          </h1>
          <p className='text-lg text-gray-600'>
            Welcome to Eat_more, your go-to platform for exploring and enjoying
            the best food experiences!
          </p>
        </div>

        {/* Mission Section */}
        <div className='mt-12'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
            Our Mission
          </h2>
          <p className='text-lg text-gray-600'>
            At Eat_more, we aim to bring you the finest restaurants, diverse
            cuisines, and exceptional service all in one place. Our mission is
            to make food exploration easy and fun for everyone, from the casual
            diner to the food enthusiast.
          </p>
        </div>

        {/* Features Section */}
        <div className='mt-12'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
            What We Offer
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Explore Restaurants
              </h3>
              <p className='text-gray-600'>
                Discover top-rated restaurants near you with detailed menus and
                reviews.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Curated Menus
              </h3>
              <p className='text-gray-600'>
                Browse through personalized food recommendations based on your
                preferences.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Seamless Ordering
              </h3>
              <p className='text-gray-600'>
                Place orders effortlessly and get your food delivered right to
                your doorsteps.
              </p>
            </div>
          </div>
        </div>



        {/* Contact Section */}
        <div className='mt-12 text-center'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
            Get in Touch
          </h2>
          <p className='text-lg text-gray-600'>
            Have any questions? We'd love to hear from you! Reach out to us at{" "}
            <a
              href='mailto:support@eatmore.com'
              className='text-indigo-600 hover:underline'>
              example@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
