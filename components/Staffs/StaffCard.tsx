'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import Heading from '../home/Heading'
import Subheading from '../home/Subheading'
import { Facebook, FacebookIcon, Instagram, InstagramIcon, Twitter } from 'lucide-react'

const variants = {
    initial: { y: 10, opacity: 0 },
    whileInView: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5, ease: 'easeInOut' } }
}

export default function StaffCard() {
    return (
        <div className='w-full h-80 flex flex-col items-center justify-around'>
            <div className='flex flex-col items-center'>
                <div className='size-36 rounded-full relative bg-yellow-400 overflow-hidden'>
                    <Image
                        src="/office.jpg"
                        alt="avatar"
                        className='w-full h-full object-cover'
                        width={192}
                        height={192}
                    />
                </div>
                <Heading
                    className='my-2 capitalize font-normal text-xl xl:text-2xl'
                    title='Alicia Henderson'
                />
                <Subheading
                    title='ceo'
                    className='tracking-normal text-base'
                />
            </div>
            <motion.div
                variants={variants}
                initial="initial"
                whileInView='whileInView'
                className="flex items-center justify-center gap-4"
            >
                <motion.div
                    variants={variants}
                >
                    <Twitter className='size-4  fill-black' />
                </motion.div>
                <motion.div
                    variants={variants}
                >
                    <Facebook className='size-4 fill-black' />
                </motion.div>
                <motion.div
                    variants={variants}
                >
                    <InstagramIcon className='size-4 ' />
                </motion.div>
            </motion.div>
        </div>
    )
}
