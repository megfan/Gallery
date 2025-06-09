import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { GalleryImages } from '../../helpers/galleryImages';
import { Link } from 'react-router';
import logoPink from '../../assets/logoPink.png';

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
          <div className="flex w-full h-full flex-col m-0 relative bg-black">
            <header className='w-full justify-between flex p-20 text-white'>
                <Link to={'/'}>
                    <img src={logoPink} alt="logo" className='h-10 w-auto fill-primary' />
                </Link>
                <nav>
                    <Link to={'/'} className='linkPink'>
                        Go back
                    </Link>
                    <Link to={'/'} className='linkPink'>
                        Contact
                    </Link>
                </nav>
            </header>
            <main className='w-full h-full mt-20 px-20 flex flex-col'>
                <section className='w-full h-screen mb-20'>
                    <div className=''>
                        <h1 className='text-white text-[10rem] font-medium'>Photography</h1>
                        <p className='text-white text-2xl font-medium w-3/5'>I'm Meg - a graphic designer and photographer with over 15 years of experience crafting visual identities
                            and telling stories through images and design.</p>
                    </div>
                    <div className='mt-10 '>
                        <button className='galleryBtn mr-5 text-white hover:text-primary'>Go to photogrphy</button>
                        <button className='galleryBtn'>Overiew</button>
                    </div>
                </section>

            </main>


        </div>
    )
}