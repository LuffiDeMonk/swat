'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Subheading from './Subheading'
import Image from 'next/image'
import Heading from './Heading'
import { Button } from '../ui/button'

const variants = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            staggerChildren: 0.2,
        }
    }
}


export default function BannerSlide() {
    return (
        <div>
            <Container className='px-0 relative lg:px-2 lg:flex lg:items-center lg:gap-12 h-[120vh]'>
                <div className="absolute lg:static inset-0 px-4 lg:px-0 flex items-center justify-center flex-col lg:block lg:basis-1/2">
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        <motion.div variants={variants}>
                            <Subheading
                                title='welcome to the digilab'
                                className='text-center lg:text-start'
                            />
                        </motion.div>
                        <motion.div variants={variants}>
                            <Heading
                                title='small decision makes a big impression'
                                className='text-center lg:text-start text-white lg:text-black capitalize lg:text-5xl antialiased'
                            />
                        </motion.div>
                        <motion.div variants={variants}>
                            <p className='text-center lg:text-start lg:text-lg text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, soluta voluptates aperiam officia ipsam ratione magnam, numquam </p>
                        </motion.div>
                        <motion.div variants={variants} className='flex justify-center lg:justify-normal'>
                            <Button className='mt-6' size='lg' onClick={() => alert('hello')}>Get in touch</Button>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="lg:basis-1/2 lg:shrink-0 h-full">
                    <Image
                        src='/office.jpg'
                        alt='banner'
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover'
                    />
                </div>
            </Container>
        </div>
    )
}
