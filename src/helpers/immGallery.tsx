
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import IMM1 from '../assets/design/IMM1.jpg';
import IMM2 from '../assets/design/IMM2.jpg';
import IMM3 from '../assets/design/IMM3.jpg';
import IMM4 from '../assets/design/IMM4.jpg';
import IMM5 from '../assets/design/IMM5.jpg';

export function immGallery(container: React.RefObject<null>) {

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const animationY1 = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
    const animationY2 = useTransform(scrollYProgress, [0, 1], ['80%', '0%']);
    const animationY3 = useTransform(scrollYProgress, [0, 1], ['50%', '0%']);

    const pictures = [
        {
            src: IMM2,
            animationY: animationY1
        },
        {
            src: IMM3,
            animationY: animationY3
        },
        {
            src: IMM5,
            animationY: animationY3
        },
        {
            src: IMM1,
            animationY: animationY2
        },
        {
            src: IMM4,
            animationY: animationY3
        },
    ]


    return pictures;
}