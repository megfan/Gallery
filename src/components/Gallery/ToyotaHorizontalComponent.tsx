import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { Arrow } from '../../helpers/Arrow';
import TOY1 from '../../assets/design/TOY_01.jpg';
import TOY1A from '../../assets/design/TOY_01A.jpg';
import TOY2 from '../../assets/design/TOY_02.jpg';
import TOY9 from '../../assets/design/TOY_09.jpg';
import TOY8 from '../../assets/design/TOY_08.jpg';
import TOY7 from '../../assets/design/TOY_07.jpg';
import A4_0 from '../../assets/design/A4_0.jpg';
import A4_1 from '../../assets/design/A4_1.jpg';
import A4_2 from '../../assets/design/A4_2.jpg';
import A4_3 from '../../assets/design/A4_3.jpg';
import A4_4 from '../../assets/design/A4_4.jpg';
import A4_5 from '../../assets/design/A4_5.jpg';
import A4_6 from '../../assets/design/A4_6.jpg';

interface SingleGalleryProps {
    galleryItems: string[];
    title: string;
    subTitle: string;
    pictureOnRight: boolean;
}

export const ToyotaHorizontalComponent: React.FC = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: targetRef });
    const Xscroll = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

    return (
        <section className='h-auto mt-60 -mb-24' ref={targetRef}>
            <header className='w-full h-full flex flex-col justify-center items-center '>
                <p className='text-4xl uppercase font-medium'>printing</p>
                <p className='uppercase'>Clos Brothers</p>
            </header>
            <main className='h-[500vh] -mt-24'>
                <div className='h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden'>
                    <motion.div className='images' style={{ x: Xscroll }}>
                        <div className='imagesItem'>
                            <div className='image-container'>
                                <img className='image' src={A4_0} alt='broshure' />
                            </div>
                        </div>
                        <div className='imagesItem'>
                            <div className='image-container'>
                                <img className='image' src={TOY9} alt='broshure' />
                            </div>
                        </div>
                        <div className='imagesItem'>
                            <div className='image-container'>
                                <img className='image' src={TOY8} alt='broshure' />
                            </div>
                        </div>
                        <div className='imagesItem'>
                            <div className='image-container'>
                                <img className='image' src={TOY1A} alt='broshure' />
                            </div>
                        </div>
                        <div className='imagesItem'>
                            <div className='image-container'>
                                <img className='image' src={A4_6} alt='broshure' />
                            </div>
                        </div>
                        <div className='imagesItem'>
                            <div className='image-container'>
                                <img className='image' src={A4_2} alt='broshure' />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </section>
    )
}