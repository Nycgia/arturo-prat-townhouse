import { useRef } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Parallax from '../components/Parallax';
import Projects from '../components/Projects';
import Galery from '../components/_Page/Galery';
import Location from '../components/_Page/Location';
import Footer from '../components/_Page/Footer';
import HeaderImage from '../components/HeaderImage';
import Characteristic from '../components/Characteristics';
import 'rsuite/dist/rsuite.min.css';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

const Home: NextPage = () => {
  const bodyRef = useRef(null);

  return (
    <>
      <HeaderImage />
      <Navbar bodyRef={bodyRef} />
      <div ref={bodyRef}>
        <div
          style={{
            display: 'flex',

            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
            }}
          >
            <Projects />
            <Characteristic />
            <Parallax />
            <Galery />
            <Location />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
