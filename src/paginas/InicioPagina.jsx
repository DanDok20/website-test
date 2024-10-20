import React, { useState } from 'react';
import Hero from '../components/Hero/Hero'
import Programs from '../components/Programs/Programs'
import Title from '../components/Title/Title'
import About from '../components/About/About';
import Campus from '../components/Campus/Campus';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const InicioPagina = () => {

  const [play_State, setPlayState] = useState(false);

  return (
    <div>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What Ee Offer' />
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Studets Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer play_State={play_State} setPlayState={setPlayState} />
    </div>
  );
};

export default InicioPagina;
