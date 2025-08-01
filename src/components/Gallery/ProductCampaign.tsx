
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from 'react';
import len from '../../assets/design/len.jpg';
import children from '../../assets/design/nnn.png';
import kasz from '../../assets/design/KASZ2.jpg';

export const ProductCampaign = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['30%', '-70%']);
    const yReverse = useTransform(scrollYProgress, [0, 1], ['30%', '-70%']);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2.5]);
    return (
        <section className={('flex w-full h-[90vh] items-center px-20 ')}>
            <div className={('w-1/2 h-full flex flex-col justify-center relative items-start')}>
                <p className='text-4xl uppercase font-medium pb-10'>Product Campaigns</p>
                <p>I work with brands to create meaningful visual campaigns that engage and inspire.
                    By combining design thinking with clear messaging, I help businesses grow their presence
                    and connect with people in a way that feels both intentional and impactful.</p>
            </div>
            <div className='relative h-full w-2/3 z-10'>
                {/* <motion.div className=' w-full h-full'
                    style={{ scale, y }}
                    transition={{
                        duration: 1,
                    }}
                > */}
                    <motion.img src={kasz} alt={'kasz'} className='h-auto w-[11vw] left-[5vw] top-[15vh] absolute object-contain' 
                    style={{ y: yReverse }}/>
                    <motion.img src={children} alt={'children'} className='h-auto w-[12vw] left-[29vw] top-[-6vh] absolute object-contain' 
                     style={{ y: yReverse }}/>
                    <motion.img src={len} alt={'len'} className='h-auto w-[15vw] left-[15vw] top-[-5vh] absolute object-contain' 
                          style={{ y }}
                    />
                {/* </motion.div> */}
            </div>
        </section>
    )
}