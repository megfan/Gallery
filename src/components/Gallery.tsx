import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import ela from '../assets/ewa.jpg';
import prince from '../assets/prince.jpg';
import gr from '../assets/gr.png';
import logo from "../assets/logoBlack.png";
import CLOS5 from "../assets/design/CLOS5.jpg";
import CLOS4 from "../assets/design/CLOS4.jpg";
import CLOS3 from "../assets/design/CLOS3.jpg";
import CLOS2 from "../assets/design/CLOS2.jpg";
import CLOS1 from "../assets/design/CLOS1.jpg";

import CL5 from "../assets/design/CL5.png";
import CL4 from "../assets/design/CL4.png";
import CL3 from "../assets/design/CL3.png";
import CL2 from "../assets/design/CL2.png";
import CL1 from "../assets/design/CL1.png";

import WPH1 from "../assets/design/WPH8.jpg";
import WPH2 from "../assets/design/WPH3.png";
import WPH3 from "../assets/design/WPH4.png";
import WPH4 from "../assets/design/WPH5.png";
import WPH5 from "../assets/design/WPH7.jpg";
import WPH6 from "../assets/design/WPH8.jpg";

import { Link } from 'react-router';
import { SingleGallery } from './SinGallery';

export const Gallery: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const [isHovered, setIsHovered] = useState(false);
    const [index, setIndex] = useState(0);

    const galleryCL = [CL5, CL2, CL1, CL3, CL4];
    const galleryCLOS = [CLOS5, CLOS1, CLOS2, CLOS3, CLOS4];
    const galleryWPH = [WPH2, WPH3, WPH4, WPH5, WPH1, WPH6];

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1)
        }, 400)
    },[isHovered]);

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['70%', '100%']);

    return (
        <div className="flex w-full h-full flex-col m-0 p-20 relative bg-white">
            <header className='w-full justify-between flex'>
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
                <section className='w-full h-[60vh]'>
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
                <div className='text-4xl my-28 w-1/2 leading-[3.5rem]'>
                    <p>Highlights of cases I've proudly crafted in collaboration with visionary clients and friends over the years.</p>
                </div>
                <SingleGallery galleryItems={galleryCL} title='Coders Lab campaign' subTitle='CODERS LAB' pictureOnRight={false}/>
                <SingleGallery galleryItems={galleryWPH} title='WPH' subTitle='private' pictureOnRight={true}/>
            </main>


        </div>
    )
}