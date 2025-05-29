import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import JUMP from '../../assets/design/JUMP3.jpg';

export const PaperComponent: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], ['100%', '200%']);

    return (
        <section className={('flex w-full h-auto items-center bg-black')}>
            {/* <div className={('w-1/2 h-full flex flex-col justify-center relative items-end')}>
                <p className='text-4xl uppercase font-medium'>Bank BPS campaign</p>
                <p>GRANTOWI</p>
            </div> */}
            <motion.div className='relative h-[200vh] w-full z-10'>
                <div className='w-full h-screen sticky top-0 overflow-hidden'>
                    <motion.div className='w-full h-full absolute top-0 flex items-start justify-end' style={{scale}}>
                        <div className='relative w-[55vw] h-[35vh] top-0 -rotate-90' >
                            <img
                                src={JUMP}
                                className='object-cover'
                                alt="image"
                            />
                        </div>
                    </motion.div>
                    </div>
            </motion.div>
        </section>
    )
}