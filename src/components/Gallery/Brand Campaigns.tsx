
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from 'react';
import bps from '../../assets/design/BPS3.jpg';
import cl3 from '../../assets/design/CL6.png';
import clos4 from '../../assets/design/CLOS5.jpg';

export const BrandCampaigns = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [1, 0], ['200%', '-20%']);
    const x = useTransform(scrollYProgress, [1, 0], ['200%', '-10%']);
    const xReverse = useTransform(scrollYProgress, [1, 0], ['-200%', '40%']);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2.5]);
    return (
        <section className={('flex w-full h-[90vh] items-center px-20 ')}>
            <div className={('w-1/2 h-full flex flex-col justify-center relative items-start')}>
                <p className='text-4xl uppercase font-medium pb-10'>Brand Campaigns</p>
                <p>I work with brands to create meaningful visual campaigns that engage and inspire.
                    By combining design thinking with clear messaging, I help businesses grow their presence
                    and connect with people in a way that feels both intentional and impactful.</p>
            </div>
            <div className='relative h-full w-2/3 z-10'>
                <motion.div className=' w-full h-full'
                    style={{ scale, y }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <motion.img src={bps} alt={'coders'} className='h-auto w-[30vw] left-[10vw] top-[-5vh] absolute object-contain' 
                          style={{ x }}
                    />
                    <motion.img src={cl3} alt={'bps'} className='h-auto w-[30vw] left-[0vw] top-[25vh] absolute object-contain' 
                    style={{ x: xReverse }}/>
                    <motion.img src={clos4} alt={'clos'} className='h-auto w-[20vw] left-[25vw] top-[53vh] absolute object-contain' 
                     style={{ x }}/>
                </motion.div>
            </div>
        </section>
    )
}