import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import PAP1 from '../../assets/design/PAP1.jpg';

export const PaperComponent: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['30%', '90%']);

    return (
        <section className={('flex w-full h-[90vh] items-center my-40 flex-row-reverse bg-darkVery')}>
            {/* <div className={('w-1/2 h-full flex flex-col justify-center relative items-end')}>
                <p className='text-4xl uppercase font-medium'>Bank BPS campaign</p>
                <p>GRANTOWI</p>
            </div> */}
            <motion.div className='w-full h-[90vh] flex items-center justify-center relative overflow-hidden'>
                {/* <motion.video width="auto" height="auto" controls={false} playsInline autoPlay loop muted className='video'
                    // style={{ width: scaleTransition }}
                    transition={{
                        delay: .4,
                        duration: 1,
                    }}>
                    <source src={require("../../assets/design/paintMOvie.mp4")} type="video/mp4" />
                </motion.video> */}
                <img src={PAP1} alt="logo" className='h-[40vh] w-auto fill-primary absolute top-40' />
            </motion.div>
        </section>
    )
}