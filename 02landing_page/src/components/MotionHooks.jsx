import React, { useRef, useState } from 'react'
import { VenetianMaskIcon, DramaIcon, RocketIcon } from 'lucide-react'
import { batman, superman, spiderman } from "../assets";
import { motion, useTransform, useScroll, useMotionTemplate, useSpring, useMotionValueEvent } from 'motion/react';

function MotionHooks() {

    const [background, setBackground] = useState([0]);
    const containerRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const backgrounds = ["#111111", "#003a61", "#9d0208"];

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * backgrounds.length);
        console.log(finalValue);
        
        setBackground(backgrounds[finalValue]);
    })

    return (
        <motion.div
         ref={containerRef}
         animate={{
            background
         }}
         transition={{
            duration: 0.3,
            ease: "easeInOut"
         }}
         style={{
            background: background
         }}
         className='flex min-h-screen items-center justify-center bg-neutral-900'>
            <div className='flex flex-col mx-auto max-w-4xl gap-10 py-20'>
                {features.map((feature, idx) => (
                    <Card key={feature.title} feature={feature} />
                ))}
            </div>
        </motion.div>
    )
}

function Card({ feature }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const translateContent = useSpring(
        useTransform(scrollYProgress, [0, 1], [200, -300]),
        {
            stiffness: 100,
            damping: 20,
            mass: 1
        }
    );
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const blurText = useTransform(scrollYProgress, [0.5, 1], [0, 5]);
    const scaleText = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

    return (
        <div
            ref={ref}
            className='grid grid-cols-2 items-center gap-20 py-20'
        >
            <motion.div
                style={{
                    filter: useMotionTemplate`blur(${blurText}px)`,
                    scale: scaleText
                }}
                className='flex flex-col gap-5'>
                {feature.icon}
                <h2 className='text-4xl font-bold text-white'>{feature.title}</h2>
                <p className='text-lg text-neutral-400'>{feature.description}</p>
            </motion.div>
            <motion.div
                style={{
                    y: translateContent,
                    opacity: opacityContent
                }}
            >{feature.content}</motion.div>
        </div>
    )
}


const features = [
    {
        icon: <VenetianMaskIcon className='h-8 w-8 text-neutral-200' />,
        title: "Batman the Symbol of Braveness",
        description: "Batman is a billionaire vigilante who protects Gotham City using his intelligence and high-tech gadgets. Known as the 'Dark Knight', he stands as a symbol of justice without any superpowers.",
        content: (
            <div>
                <img
                    src={batman}
                    alt="batman"
                    height="500"
                    width="500"
                    className='rounded-lg'
                />
            </div>
        )
    },
    {
        icon: <RocketIcon className='h-8 w-8 text-neutral-200' />,
        title: "Superman the Symbol of Hope",
        description: "Superman is an alien from the planet Krypton who possesses incredible strength, speed, and the ability to fly Known as the 'Man of Steel', he stands for truth, justice, and hope.",
        content: (
            <div>
                <img
                    src={superman}
                    alt="superman"
                    height="500"
                    width="500"
                    className='rounded-lg'
                />
            </div>
        )
    },
    {
        icon: <DramaIcon className='h-8 w-8 text-neutral-200' />,
        title: "Spiderman the Symbol of Responsibility",
        description: "Spider-Man is a young superhero who gained spider-like powers after being bitten by a radioactive spider Known for his agility and web-slinging skills, he fights crime while balancing his everyday life.",
        content: (
            <div>
                <img
                    src={spiderman}
                    alt="spiderman"
                    height="500"
                    width="500"
                    className='rounded-lg'
                />
            </div>
        )
    }
];

export default MotionHooks