import React from 'react';
// import Head from 'next/head';
// import { groq } from 'next-sanity';
// import { getClient } from 'lib/sanity';
import { client } from '../../lib/sanity.client';
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { Banner, Footer, Header, Properties, Layout } from '../components';

interface BannerDocument {
  image: {
    asset: {
      url: string;
    };
  };
  buttonText: string;
  largeText1: string;
  midText: string;
  smallText: string;
}

export default function Home({ bannerData }: { bannerData: BannerDocument[] }) {
  return (
    <>
      <Header />

      <Banner banner={bannerData.length && bannerData[0]} />
      <Properties />
      <h2 className='text-2xl text-cyan-500'>Start</h2>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData: BannerDocument[] = await client.fetch(bannerQuery);

  return {
    props: { bannerData },
  };
};
