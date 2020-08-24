import React from 'react';
import { Layout, LayoutContext } from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import RatesTickerTape from '../../components/RatesTickerTape/RatesTickerTape';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import Footer from '../../components/Footer';
import CryptoTable from '../../components/CryptoTable/CryptoTable';
import RatesCryptoTable from '../../components/RatesCryptoTable/RatesCryptoTable';
import analyticsImg from '../../assets/img/graph.svg';
import groupImg from '../../assets/img/group.svg';
import hourglassImg from '../../assets/img/hourglass.svg';
import { features } from './home.module.css';
import image from '../../assets/img/image.jpg';

const home = () => {
  return (
    <Layout>
      <Header />
      <RatesTickerTape />
      <Hero />
      <section className={`${features} px-5 lg:px-20 py-6 md:py-12 flex flex-col sm:flex-row items-center justify-between`}>
        <Feature img={analyticsImg}>
          The quick, brown fox jumps over a lazy dog. DJs flock by when.
        </Feature>
        <Feature img={groupImg} className={`b-l`}>
          The quick, brown fox jumps over a lazy dog. DJs flock by when.
        </Feature>
        <Feature img={hourglassImg} className={`b-l`}>
          The quick, brown fox jumps over a lazy dog. DJs flock by when.
        </Feature>
      </section>
      <section className={`px-5 lg:px-20  my-6 sm:my-24 flex flex-col sm:flex-row items-center justify-between`}>
        <PhotoCard img={image} className="custom-bg-dark mb-4 sm:mr-2">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
        </PhotoCard>
        <PhotoCard img={image} className="custom-bg-red mb-4 sm:mr-2">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
        </PhotoCard>
        <PhotoCard img={image} className="custom-bg-purple mb-4 sm:mr-2">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
        </PhotoCard>
      </section>
      <section>
        <div className="px-auto">
          <RatesCryptoTable />
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
export default home;