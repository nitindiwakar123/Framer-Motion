import React, { useEffect, useState, useRef } from 'react'
import { bmwImage, rollsRoyceImage, supraImage, bugattiImage, nissanImage } from "../assets";
import { motion } from 'motion/react';

function LayoutCards() {
    const [current, setCurrent] = useState(null);
    const currentRef = useRef(null)

    const handleClick = (e) => {
        if (currentRef === null) return;

        if (currentRef && !currentRef.current.contains(e.target)) {
            setCurrent(null);
        }
    }


    return (
        <div onClick={handleClick} className='py-10 bg-gray-900 min-h-screen relative'>
            {current && <motion.div
             initial={{
                opacity: 0,
             }}
             animate={{
                opacity: 1,
             }}
             transition={{
                duration: 0.3
             }}
             className='fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm'></motion.div>}
            {current &&
                <motion.div
                    layoutId={`card-${current.title}`}
                    ref={currentRef}
                    className='h-[600px] bg-white fixed inset-0 z-20 m-auto w-72 rounded-2xl border border-neutral-100 p-4'
                >
                    <motion.img
                        layoutId={`card-image-${current.title}`}
                        src={current.src}
                        alt={current.title}
                        className='w-full aspect-square rounded-lg'
                    />

                    <div className='flex flex-col justify-between items-start'>
                        <div className='w-full flex justify-between items-center py-4 gap-2'>
                            <div className='flex flex-col items-start gap-2'>
                                <motion.h2
                                    layoutId={`card-title-${current.title}`}
                                    className='font-bold text-lg tracking-tight text-black'>{current.title}</motion.h2>
                                <motion.p
                                    layoutId={`card-des-${current.discription}`}
                                    className='text-sm text-neutral-500'>{current.discription}</motion.p>
                            </div>
                            <motion.button
                                layoutId={`card-play-${current.title}`}
                                className='px-4 py-2 bg-green-500 rounded-full text-white'
                            >{current.ctaText}
                            </motion.button>
                        </div>
                        <motion.div
                        initial={{
                            filter: "blur(10px)",
                            opacity: 0,
                        }}
                        animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                         className='overflow-auto text-neutral-500'>
                            {current.content()}
                        </motion.div>
                    </div>
                </motion.div>
            }
            <div className='max-w-lg mx-auto flex flex-col gap-10'>
                {cards.map((card, idx) => (
                    <motion.button
                        layoutId={`card-${card.title}`}
                        key={card.title}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrent(card);
                        }}
                        className='p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-100 cursor-pointer'
                    >
                        <div className='flex gap-4 items-center'>
                            <motion.img
                                layoutId={`card-image-${card.title}`}
                                src={card.src}
                                alt={card.title}
                                className='h-14 aspect-square rounded-lg' />
                            <div className='flex flex-col items-center gap-2'>
                                <motion.h2
                                    layoutId={`card-title-${card.title}`}
                                    className='font-bold text-xs tracking-tight text-black'>{card.title}</motion.h2>
                                <motion.p
                                    layoutId={`card-des-${card.discription}`}
                                    className='text-[10px] text-neutral-500'>{card.discription}</motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`card-play-${card.title}`}
                            className='px-2 py-1 bg-green-500 rounded-full text-white text-xs'>
                            {card.ctaText}
                        </motion.button>
                    </motion.button>

                ))}
            </div>
        </div>
    )
}

const cards = [
    {
        discription: "BMW M5",
        title: "Black Panther",
        src: bmwImage,
        ctaText: "play",
        content: () => {
            return (
                <p className='text-start text-balance text-sm text-neutral-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem expedita hic rem atque commodi, sequi error dolorem nulla nihil sit quibusdam obcaecati exercitationem dolor, suscipit animi. Temporibus porro blanditiis vel tenetur sit nesciunt sint quasi sed rem ab voluptatem nobis repellendus, cumque voluptas esse.
                </p>
            )
        }
    },
    {
        discription: "Rolls Royce Phantom",
        title: "Royal Phantom",
        src: rollsRoyceImage,
        ctaText: "play",
        content: () => {
            return (
                <p className='text-start text-balance text-sm text-neutral-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem expedita hic rem atque commodi, sequi error dolorem nulla nihil sit quibusdam obcaecati exercitationem dolor, suscipit animi. Temporibus porro blanditiis vel tenetur sit nesciunt sint quasi sed rem ab voluptatem nobis repellendus, cumque voluptas esse.
                </p>
            )
        }
    },
    {
        discription: "Supra MK5",
        title: "MK5 Monster",
        src: supraImage,
        ctaText: "play",
        content: () => {
            return (
                <p className='text-start text-balance text-sm text-neutral-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem expedita hic rem atque commodi, sequi error dolorem nulla nihil sit quibusdam obcaecati exercitationem dolor, suscipit animi. Temporibus porro blanditiis vel tenetur sit nesciunt sint quasi sed rem ab voluptatem nobis repellendus, cumque voluptas esse.
                </p>
            )
        }
    },
    {
        discription: "Buggati Chiron",
        title: "Speed God",
        src: bugattiImage,
        ctaText: "play",
        content: () => {
            return (
                <p className='text-start text-balance text-sm text-neutral-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem expedita hic rem atque commodi, sequi error dolorem nulla nihil sit quibusdam obcaecati exercitationem dolor, suscipit animi. Temporibus porro blanditiis vel tenetur sit nesciunt sint quasi sed rem ab voluptatem nobis repellendus, cumque voluptas esse.
                </p>
            )
        }
    },
    {
        discription: "Nissan GTR",
        title: "Nitro Ninja",
        src: nissanImage,
        ctaText: "play",
        content: () => {
            return (
                <p className='text-start text-balance text-sm text-neutral-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem expedita hic rem atque commodi, sequi error dolorem nulla nihil sit quibusdam obcaecati exercitationem dolor, suscipit animi. Temporibus porro blanditiis vel tenetur sit nesciunt sint quasi sed rem ab voluptatem nobis repellendus, cumque voluptas esse.
                </p>
            )
        }
    },
]

export default LayoutCards