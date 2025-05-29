import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";

interface AnimationWrapperProps {
    children: React.ReactNode;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({children}) => {
    return (
        <motion.div
            initial={{opacity: 0, x: '-100%'}}
            animate={{opacity: 1, x: '0%'}}
            exit={{opacity: 0, x: '-100%'}}
            transition={{duration: 0.8}}
        >
            {children}
        </motion.div>
    )
}