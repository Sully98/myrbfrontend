import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from '../Layout/Layout';
import { hero, hero__illustration } from './Hero.module.css';

const Hero = () => {
  const { openModal } = useContext(LayoutContext);

  return (
    <main className={`${hero} px-20 flex items-center justify-between overflow-hidden`}>
      <div className="mr-5">
        <h1 className="h1 mb-6">Bot of life</h1>
        <p className="mb-12">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
          Junk MTV quiz graced by fox whelps. Bawds jog
        </p>
        <div>
          <button onClick={() => openModal('signup')} className="btn btn-lg btn-green mr-2 sm:mr-4 mb-2">Get started</button>
          <Link to="/about" className="btn btn-lg btn-dark mb-2">Learn more</Link>
        </div>
      </div>
      <div className="mr-10 hidden md:block">
        <div className={`${hero__illustration}`}>
          <div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero;