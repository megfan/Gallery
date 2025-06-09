import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import IMM1 from '../../assets/design/IMM1.jpg';
import IMM2 from '../../assets/design/IMM2.jpg';
import IMM3 from '../../assets/design/IMM3.jpg';
import IMM4 from '../../assets/design/IMM4.jpg';

export const ImmComponent: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });
    const pictures = [IMM2,IMM1,IMM3,IMM4]
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);

    return (
        <section className={('flex w-ful l h-[70vh] items-center mt-32 px-20')}>
            <div className='relative h-full w-2/3 z-10'>
                    {pictures.map((src, index) => {
                        return <motion.div key={index} 
                                    style={{ scale }} 
                                    className='imagePosition'>
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
            <div className={('w-1/3 h-full flex flex-col justify-center items-end ')}>
                <p className='text-4xl uppercase font-medium'>Rebranding & www</p>
                <p className='uppercase'>Media Monitoring Institute</p>
            </div>
        </section>
    )
}