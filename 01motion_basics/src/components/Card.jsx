import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { motion, AnimatePresence } from "motion/react";


function Card() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <AnimatePresence>
                {open &&
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className='w-72 min-h-[26rem] h-[26rem] rounded-xl p-6 flex flex-col bg-white'
                    >
                        <h2 className='font-bold text-[10px]'>Aceternity UI Components</h2>
                        <p className='text-neutral-600 mt-2 text-[10px]'>
                            A collection of beautiful UI components, let's get on with it.
                        </p>
                        <div className='flex items-center justify-center'>
                            <button
                                onClick={() => setOpen(false)}
                                className='flex items-center gap-1 text-[10px] mt-4 cursor-pointer bg-black text-white rounded-md py-2 px-4 text-lg'>
                                <img width={20} height={20} src={Logo} alt="" />
                                Aceternity
                            </button>
                        </div>
                        <div className='bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>
                            {/* Motion div */}
                            <motion.div
                                className='absolute inset-0 w-full h-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200'
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className='flex flex-col gap-1 p-4'>
                                    <h3 className='font-semibold texy-lg font-sans'>Aceternity UI Components</h3>
                                    <p className='text-sm text-gray-600'>Collection of UI Components</p>
                                </div>
                                <div className='flex flex-col gap-1 p-4'>
                                    <h3 className='font-semibold texy-lg font-sans'>Aceternity UI Components</h3>
                                    <p className='text-sm text-gray-600'>Collection of UI Components</p>
                                </div>
                                <div className='flex flex-col gap-1 p-4'>
                                    <h3 className='font-semibold texy-lg font-sans'>Aceternity UI Components</h3>
                                    <p className='text-sm text-gray-600'>Collection of UI Components</p>
                                </div>
                            </motion.div>
                            {/* Motion div */}
                        </div>
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Card