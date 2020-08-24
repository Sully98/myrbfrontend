import React from 'react';
import { Layout, LayoutContext } from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import FAQ from '../../components/FAQ/FAQ';
import { header, container } from './about.module.css';

const About = () => {
  return (
    <Layout>
      <Header bordered="true"/>
        <div className={container}>
          <div className={`${header} px-20 pt-16 md:pt-20 lg:pt-40 pb-20`}>
            <h1 className="h1 mb-10">About MYRB</h1>
            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when</p>
          </div>
          <article class="py-16 px-20">
            <p class="mb-4">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
              Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.
              Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sed fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.
            </p>
            <p>
              A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game.
            </p>
          </article>
          <FAQ />
        </div>
       <Footer />
    </Layout>
  )
}

export default About;