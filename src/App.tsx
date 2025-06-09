import React from 'react';
import { useEffect } from 'react';
import Lenis from 'lenis'
import { MainPage } from './components/MainPage';
import { Photo } from './components/Photo/Photo';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Gallery } from './components/Gallery/Gallery';
import { AnimationWrapper } from './helpers/AnimationWrapper';
import { AnimatePresence } from "motion/react"

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const location = useLocation();

  return (
      <div className="flex w-full h-full flex-col m-0 p-0 bg-darkVery">
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            // <AnimationWrapper>
              <MainPage />
            // </AnimationWrapper>
            } />
          <Route path="photo" element={
              <AnimationWrapper>
                <Photo />
              </AnimationWrapper>
            } />
          <Route path="gallery" element={
            <AnimationWrapper>
              <Gallery />
            </AnimationWrapper>
            } />
        </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;
