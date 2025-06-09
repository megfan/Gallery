import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { GalleryImages } from '../../helpers/galleryImages';

export const Photo: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });
    const bgColorTransition = useTransform(scrollYProgress,
        [0, 0.5],
        ['rgb(23,23,23)', 'rgb(0,0,0)']);

    return (
       
            <motion.div className='relative h-[300vh] z-10'
                style={{ background: bgColorTransition }}
            >
                <div className='sticky top-0 h-[100vh] overflow-hidden'>
                    {GalleryImages(container).map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className='el'>
                            <div className='imageContainer'>
                                <img
                                    src={src}
                                    className='object-cover'
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                    })
                    }
                </div>
            </motion.div>
          
    )
}