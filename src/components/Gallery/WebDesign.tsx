
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from 'react';
import bps from '../../assets/design/BPS3.jpg';
import cl3 from '../../assets/design/CL3.png';
import guru from '../../assets/design/GURU.jpg';
import paper2 from '../../assets/design/PAPER1.jpg';
import { ParallaxPicFrame } from "../../helpers/ParallaxPicFrame";

export const WebDesigns = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [1, 0], ['200%', '-20%']);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
    return (
        <section className={('flex w-full h-[70vh] items-center px-20 flex-row-reverse')}>
            <div className={('w-1/2 h-full flex flex-col justify-center relative items-start')}>
                <p className='text-4xl uppercase font-medium pb-10'>Web Design</p>
                <p>Designing intuitive, visually appealing websites that embody your brand's
                    character. Our web designs ensure a seamless user experience, enhancing
                    engagement and reinforcing your brand's online presence.-------------- do zmiany</p>
            </div>
            <div className='relative h-full w-2/3 z-10'>
                {/* <motion.div className=' w-full h-full'
                    style={{ scale, y }}
                    transition={{
                        duration: 1,
                    }}
                > */}
                <div className='w-[20vw] h-[50vh] absolute top-[20vh] overflow-hidden'>
                    <ParallaxPicFrame src={paper2} styles={'photoParallax'} />
                </div>
                <div className='w-[20vw] h-[50vh] absolute top-[10vh] left-[25vw] overflow-hidden'>
                    <ParallaxPicFrame src={guru} styles={'photoParallax'} />
                </div>

                {/* </motion.div> */}
            </div>
        </section>
    )
}