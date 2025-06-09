import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { GalleryImages } from '../../helpers/galleryImages';

export const PhotoGalleryFirst: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
       
            <motion.div className='relative h-[200vh] w-full z-10'>
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