import React from 'react';
import { useEffect } from 'react';
import Lenis from 'lenis'
import { MainPage } from './components/MainPage';
import { Menu } from './components/Menu';
import { MainGallery } from './components/MainGallery';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Gallery } from './components/Gallery';

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <BrowserRouter>
      <div className="flex w-full h-full flex-col m-0 p-0 bg-darkVery">
        {/* <Menu /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="photo" element={<MainGallery />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
