import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import logo from "../../assets/logoBlack.png";
import CLOS5 from "../../assets/design/CLOS5.jpg";
import CLOS4 from "../../assets/design/CLOS4.jpg";
import CLOS3 from "../../assets/design/CLOS3.jpg";
import CLOS2 from "../../assets/design/CLOS2.jpg";
import CLOS1 from "../../assets/design/CLOS1.jpg";

import CL6 from "../../assets/design/CL6.png";
import CL5 from "../../assets/design/CL5.png";
import CL4 from "../../assets/design/CL4.png";
import CL3 from "../../assets/design/CL3.png";
import CL2 from "../../assets/design/CL2.png";
import CL1 from "../../assets/design/CL1.png";

import { Link } from 'react-router';
import { SingleGallery } from './SinGallery';
import { ImmComponent } from './ImmComponent';
import { BpsComponent } from './BpsComponent';
import { PaperComponent } from './PaperComponent';

export const Gallery: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const [isHovered, setIsHovered] = useState(false);
    const [index, setIndex] = useState(0);

    const galleryCL = [CL6, CL5, CL2, CL1, CL3, CL4];
    const galleryCLOS = [CLOS5, CLOS1, CLOS2, CLOS3, CLOS4];

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1)
        }, 400)
    },[isHovered]);

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['70%', '100%']);

    return (
        <div className="flex w-full h-full flex-col m-0 relative bg-white">
            <header className='w-full justify-between flex p-20 '>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='h-10 w-auto fill-primary' />
                </Link>
                <nav>
                    <Link to={'/'} className='text-2xl font-semibold mr-10'>
                        Go back
                    </Link>
                    <Link to={'/'} className='text-2xl font-semibold'>
                        Contact
                    </Link>
                </nav>
            </header>
            <main className='w-full h-full mt-20 flex flex-col'>
                <section className='w-full h-[45vh]'>
                    <div className=''>
                        <h1 className='text-darkVery text-[10rem] font-medium'>Graphic <span className='font-bold'>Design</span></h1>
                        <p className='text-2xl font-medium w-3/5'>I'm Meg - a graphic designer and photographer with over 15 years of experience crafting visual identities
                            and telling stories through images and design.</p>
                    </div>
                    <div className='mt-10'>
                        <button className='galleryBtn mr-5'>Go to photogrphy</button>
                        <button className='galleryBtn'>Overiew</button>
                    </div>
                </section>
             
                <SingleGallery galleryItems={galleryCLOS} title='TOYOTA CAMPAING' subTitle='CLOS BROTHERS' pictureOnRight={true}/>
                <div className='text-4xl my-28 ml-44 w-1/3 leading-[3.5rem] font-medium'>
                    <p>Highlights of cases I've proudly crafted in collaboration with visionary clients and friends over the years.</p>
                </div>
                <SingleGallery galleryItems={galleryCL} title='Coders Lab campaign' subTitle='CODERS LAB' pictureOnRight={false}/>
                <ImmComponent/>
                <BpsComponent/>
                <PaperComponent/>
            </main>


        </div>
    )
}