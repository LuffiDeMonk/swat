import Image from 'next/image'
import React from 'react'
import Heading from '../home/Heading'
import Subheading from '../home/Subheading'
import { Facebook, FacebookIcon, Instagram, InstagramIcon, Twitter } from 'lucide-react'
import { MotionDiv } from '../home/MotionDiv'
import { variants } from '../animation'



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
            <MotionDiv
                variants={variants}
                viewport={{ once: true }}
                initial="initial"
                whileInView='whileInView'
                className="flex items-center justify-center gap-4"
            >
                <MotionDiv
                    variants={variants}
                >
                    <Twitter className='size-4  fill-black' />
                </MotionDiv>
                <MotionDiv
                    variants={variants}
                >
                    <Facebook className='size-4 fill-black' />
                </MotionDiv>
                <MotionDiv
                    variants={variants}
                >
                    <InstagramIcon className='size-4 ' />
                </MotionDiv>
            </MotionDiv>
        </div>
    )
}
