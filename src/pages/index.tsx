import React from 'react';
// import Head from 'next/head';
import { groq } from 'next-sanity';
import { getClient } from 'lib/sanity';
import { Banner, Footer, Navbar, Properties, Layout } from 'components';

function Home({ bannerData }) {
  return (
    <>
      <div>Navbar</div>
      <Banner />
      {console.log(bannerData)}
      <div>
        {['Property 1', 'Property 2', 'Property 3'].map((property) => property)}
      </div>
      <div>Footer</div>
    </>
  );
}

export const getServerSideProps = async () => {
  const Bannerquery = groq`*[_type == 'banner']`;
  const bannerData = await getClient().fetch(Bannerquery);

  return {
    props: { bannerData },
  };
};

export default Home;
