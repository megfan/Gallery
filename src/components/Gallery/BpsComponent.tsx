import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";

export const BpsComponent: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['30%', '90%']);

    return (
        <section className={('flex w-full h-[90vh] items-center my-40 flex-row-reverse px-20 ')}>
            <div className={('w-1/2 h-full flex flex-col justify-center relative items-end')}>
                <p className='text-4xl uppercase font-medium'>Bank BPS campaign</p>
                <p>GRANTOWI</p>
            </div>
            <motion.div className='w-1/2 h-full flex items-center'>
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