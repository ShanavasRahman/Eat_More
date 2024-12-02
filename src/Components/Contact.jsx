import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
          <p className='text-lg text-gray-600'>
            Have questions? We're here to help. Reach out to us, and we'll get back to you as soon as possible!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className='mt-12'>
          <div className='bg-white shadow-lg rounded-lg p-8'>
            <div className='grid grid-cols-1 gap-6'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2' htmlFor='name'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Enter your name'
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2' htmlFor='email'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter your email'
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2' htmlFor='message'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  placeholder='Enter your message'
                  rows='4'
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
                ></textarea>
              </div>

              <div className='flex justify-center'>
                <button
                  type='button'
                  className='w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Contact
