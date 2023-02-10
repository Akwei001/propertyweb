import React from 'react';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';

const Banner = ({ banner }) => {
  return (
    <>
      <section className='relative bg-[<img src={urlFor(banner.image)} />] bg-cover bg-center bg-no-repeat'>
        {/* {<img src={urlFor(banner.image)} />} */}
        <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25'></div>

        <div className='relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-center sm:text-left'>
            <h1 className='text-3xl font-extrabold sm:text-5xl'>
              {banner.largeText1}
              <strong className='block font-extrabold text-rose-700'></strong>
            </h1>

            <p className='max-w-lg mt-4 sm:text-xl sm:leading-relaxed'></p>

            <div className='flex flex-wrap gap-4 mt-8 text-center'>
              <Link href={'#'}>
                <button className='block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'>
                  {banner.buttonText}
                </button>
              </Link>

              <button className='block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <h2>This is a banner</h2>
    </>
  );
};

export default Banner;
