
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import manJumping from '../assets/manJumping.webp';
import Lon from '../assets/Lon.webp';
import ny from '../assets/ny.webp';
import x from '../assets/x.webp';
import mountain from '../assets/mountain.avif';
import dance from '../assets/dance.jpg';
import tree from '../assets/tree.jpg';
import mask from '../assets/mask.jpg';

export function GalleryImages(container: React.RefObject<null>) {

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: mountain,
            scale: scale4
        },
        {
            src: tree,
            scale: scale5
        },
        {
            src: dance,
            scale: scale8
        },
        {
            src: x,
            scale: scale8
        },
        {
            src: manJumping,
            scale: scale9
        },
        {
            src: Lon,
            scale: scale8
        },
        {
            src: ny,
            scale: scale9
        },
        {
            src: mask,
            scale: scale8
        }
    ]


    return pictures;
}