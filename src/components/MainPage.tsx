import React, { useState } from 'react';
import { easeInOut, motion } from "motion/react";
import '../index.css'
import useMousePosition from '../helpers/useMousePosition';
import { Link } from "react-router";

const DURATION = 0.25;
const STAGGER = 0.025;
export const MainPage: React.FC = () => {

  const [isHovered, setIsHovered] = useState(false);
  const photo = 'Photography'.split("");
  const gall = 'Graphic Design'.split("");

  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center m-0 p-0 relative bg-darkVery overflow-hidden">
      <div className='w-full m-0 h-screen flex flex-col items-start justify-center relative'>
        <motion.div className='mask z-10 absolute'
          animate={{
            WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
        >
          <h1 className='mainTitle' onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}
          >Margaret Staszewska</h1>
        </motion.div>
        <motion.div className='body'>
          <motion.h1 className='mainTitle text-darkThird'
            initial={{ y: -100, opacity: 0, filter: 'blur(40px)', scale: '120%' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: '100%' }}
            transition={{ duration: 1 }}
          >Margaret Staszewska</motion.h1>
        </motion.div>
      </div>
      <div className='w-full flex justify-between items-start absolute bottom-[30%] z-20'>
        <Link to='gallery'>
          <motion.div className='subTitleBtn group -ml-14'
            initial={{ x: -200, opacity: 0, filter: 'blur(40px)' }}
            whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1.6, duration: .4 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#f60797"
              className="size-12 mr-2 mb-2 opacity-0 group-hover:opacity-100 group-hover:ml-20 transitionAll">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <motion.a className='subMainTitle relative block overflow-hidden whitespace-nowrap p-2' href='/photo'
              initial="initial"
              whileHover="hovered"
            >
              <div>
                {gall.map((e, idx) => {
                  return <motion.span
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: '-120%' },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: 'easeInOut',
                      delay: STAGGER * idx,
                    }}
                    key={e + idx}
                    className='inline-block'
                  >{e}</motion.span>
                })}
              </div>
              <div className='absolute inset-0 text-primary' >
                {gall.map((e, idx) => {
                  return <motion.span
                    variants={{
                      initial: { y: "120%" },
                      hovered: { y: 7 },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: 'easeInOut',
                      delay: STAGGER * idx,
                    }}
                    key={e + idx + 2}
                    className='inline-block'
                  >{e}</motion.span>
                })}
              </div>
            </motion.a>
          </motion.div>
        </Link>
        <Link to='photo'>
          <motion.div className='subTitleBtn group -mr-12'
            initial={{ x: 200, opacity: 0, filter: 'blur(40px)' }}
            whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1.6, duration: 0.4 }}
          >
            <motion.a className='subMainTitle relative block overflow-hidden whitespace-nowrap p-2'
              initial="initial"
              whileHover="hovered"
            >
              <div>
                {photo.map((e, idx) => {
                  return <motion.span
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: '-120%' },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: 'easeInOut',
                      delay: STAGGER * idx,
                    }}
                    key={e + idx}
                    className='inline-block'
                  >{e}</motion.span>
                })}
              </div>
              <div className='absolute inset-0 text-primary' >
                {photo.map((e, idx) => {
                  return <motion.span
                    variants={{
                      initial: { y: "130%" },
                      hovered: { y: 9 },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: 'easeInOut',
                      delay: STAGGER * idx,
                    }}
                    key={e + idx + 2}
                    className='inline-block'
                  >{e}</motion.span>
                })}
              </div>
            </motion.a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#f60797"
              className="size-12 ml-2 mb-1 opacity-0 group-hover:opacity-100 group-hover:mr-20 transitionAll text-primary">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </motion.div>
        </Link>
      </div>

    </div>
  )
}

