import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* <>
        <footer className='text-gray-600 body-font'>
          <div className='container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap'>
            <div className='flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0'>
              <a className='flex items-center justify-center font-medium text-gray-900 title-font md:justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10 p-2 text-white bg-indigo-500 rounded-full'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
                  git
                </svg>
                <span className='ml-3 text-xl'>Propertyweb</span>
              </a>
              <p className='mt-2 text-sm text-gray-500'></p>
            </div>
            <div className='flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left'>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 title-font'>
                  Services
                </h2>
                <nav className='mb-10 list-none'>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Our services
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Careers at Propertyweb
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Latest news
                    </a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 title-font'>
                  About
                </h2>
                <nav className='mb-10 list-none'>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>Buy</a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>Rent</a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Property Management
                    </a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 title-font'>
                  Our Offices
                </h2>
                <nav className='mb-10 list-none'>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>London</a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Birmingham
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Manchester
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Liverpool
                    </a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 title-font'>
                  Work with us
                </h2>
                <nav className='mb-10 list-none'>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Off plan
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Holiday homes
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Home maintenance
                    </a>
                  </li>
                  <li>
                    <a className='text-gray-600 hover:text-gray-800'>
                      Sell with us
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className='bg-gray-100'>
            <div className='container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row'>
              <p className='text-sm text-center text-gray-500 sm:text-left'>
                © 2023
                <a
                  href=''
                  rel='noopener noreferrer'
                  className='ml-1 text-gray-600'
                  target='_blank'
                ></a>
              </p>
              <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
                <a className='text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-3 text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-3 text-gray-500'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
                <a className='ml-3 text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='0'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='none'
                      d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                    ></path>
                    <circle cx='4' cy='4' r='2' stroke='none'></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </> */}
    </div>
  );
};

export default Footer;
