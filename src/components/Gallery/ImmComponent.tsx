import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { immGallery } from '../../helpers/immGallery';

export const ImmComponent: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });
    
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);

    return (
        <section className={('flex w-full h-[100vh] items-center p-20 ')}>
            <div className={('w-1/3 h-full flex flex-col justify-center relative ')}>
                <p className='text-4xl uppercase font-medium'>Rebranding & www</p>
                <p className='uppercase'>Media Monitoring Institute</p>
            </div>
            <div className='relative h-full w-2/3 z-10'>
                <div className='relative flex flex-col h-full -mt-44'>
                    {immGallery(container).map(({src, animationY}, index) => {
                        return <motion.div key={index} style={{y: animationY, scale}} className='el'>
                            <div className='imageContainer'>
                                <img
                                    src={src}
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                    })
                    }
                </div>
            </div>
        </section>
    )
}