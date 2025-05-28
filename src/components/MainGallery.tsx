import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { GalleryImages } from '../helpers/galleryImages';

export const MainGallery: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });
    const bgColorTransition = useTransform(scrollYProgress,
        [0, 0.5],
        ['rgb(23,23,23)', 'rgb(0,0,0)']);

    return (
        <motion.div className="h-auto flex-col flex bg-black"
            // initial={{ color: 'yellow', opacity: 0 }}
            // animate={{ color: 'black', opacity: 1 }}
            // exit={{ color: 'white' }}
            // style={{ background: bgColorTransition }}
            // transition={{ duration: 1 }}
            ref={container}>
            <div className='h-44 bg-black'>
                <motion.h1 className='text-[20rem] text-white font-thin ml-44'>Photo</motion.h1>
            </div>
            <motion.div className='relative h-[200vh] z-10'
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
                    {/* <motion.div style={{scale}} className='w-full h-full absolute top-0 flex items-center justify-center'>
                    <div className='imageContainer'>
                        <img
                            src={mountain}
                            className='object-cover'
                            alt="image"
                        />
                    </div>

                </motion.div> */}
                    {/* <img src={manJumping} alt='manJumping' className='h-screen object-cover bg-left ' />
                <img src={ela} alt='woman' className='h-screen object-cover bg-left ' />
                <img src={john} alt='manJumping' className='h-screen object-cover bg-left ' /> */}
            </div>
                </motion.div>
                 <div className='h-screen bg-black mb-40'>
                <motion.h1 className='text-[20rem] text-white font-thin ml-44'>Photo</motion.h1>
            </div>
        </motion.div>
    )
}