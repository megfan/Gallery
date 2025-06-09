import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";

export const BpsComponent: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

     const scaleTransition = useTransform(scrollYProgress, [0, 1], ['-50%', '90%']);

    return (
        <section className={('flex w-full h-[90vh] items-center justify-center my-40 px-20 flex-col ')}>
            <div className={('w-full h-full flex flex-col items-center mt-24')}>
                <p className='text-4xl uppercase font-medium'>Bank BPS campaign</p>
                <p>GRANTOWI</p>
            </div>
            <motion.div className='w-full h-full flex items-center justify-center'>
                <motion.video width="auto" height="auto" controls={false} playsInline autoPlay loop muted className='video'
                    style={{ width: scaleTransition }}
                    transition={{
                        delay: .4,
                        duration: 1,
                    }}>
                    <source src={require("../../assets/design/BPS_MOVIE.mp4")} type="video/mp4" />
                </motion.video>
            </motion.div>
        </section>
    )
}