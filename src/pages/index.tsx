import React from 'react';
import Head from 'next/head';
import { groq } from 'next-sanity';
// import { getClient } from 'lib/sanity';
import { client } from '../../lib/sanity.client';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { Banner, Footer, Header, Properties, Layout } from '../components';

export default function Home({ bannerData }) {
  return (
    <>
      <Header />
      {console.log(bannerData)}
      <Banner />
      <Properties />
      <h2 className='text-2xl text-cyan-500'>Start</h2>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { bannerData },
  };
};
