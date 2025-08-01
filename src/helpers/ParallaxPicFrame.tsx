import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxPicFrameProps {
    styles: string;
    src: string;
}

export const ParallaxPicFrame: React.FC<ParallaxPicFrameProps> = ({styles, src}) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["end start", "start end"]
    });

    const paralax1 = useTransform(scrollYProgress, [1,0], ["15%", "-60%"]);

    return (
    <div ref={container} className={styles}  
        style={{
            backgroundPosition: "center",
            backgroundSize: "cover"
      }}>
        <motion.img src={src} className="block scale-150" alt="aboutMe" style={{y: paralax1}}/>
    </div>
    )
}