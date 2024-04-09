import React from 'react'
import Container from './Container'
import { FacebookIcon, InstagramIcon, MailIcon, MapPin, MoveRight, PhoneCallIcon, TwitterIcon } from 'lucide-react'
import { MotionDiv } from './MotionDiv'
import { variants } from '../animation'

export default function Footer() {
    return (
        <main className='bg-black text-white min-h-[80vh] py-24'>
            <Container className='flex flex-col sm:flex-row flex-wrap gap-12 xl:justify-between'>
                <div className='space-y-10 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 shrink-0'>
                    <h3 className='text-xl fonr-semibold'>About SWAT</h3>
                    <p className='text-base'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <MotionDiv
                        variants={variants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <MotionDiv variants={variants} className="size-12 rounded-full bg-stone-600 text-gray-300 flex items-center justify-center">
                            <TwitterIcon className='fill-gray-300' />
                        </MotionDiv>
                        <MotionDiv variants={variants} className="size-12 rounded-full bg-stone-600 text-gray-300 flex items-center justify-center">
                            <FacebookIcon className='fill-gray-300' />
                        </MotionDiv>
                        <MotionDiv variants={variants} className="size-12 rounded-full bg-stone-600 text-gray-300 flex items-center justify-center">
                            <InstagramIcon />
                        </MotionDiv>
                    </MotionDiv>
                </div>
                <div className='space-y-10'>
                    <h3 className='text-xl font-semibold'>Links</h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Home</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Home</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Home</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Home</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Home</p>
                        </li>

                    </ul>
                </div>
                <div className='space-y-10'>
                    <h3 className='text-xl font-semibold'>Services</h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Web Design</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Web Development</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Business Stratergy</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Data Analysis</p>
                        </li>
                        <li className='flex items-center gap-4 text-gray-400'>
                            <MoveRight />
                            <p>Graphics Design</p>
                        </li>

                    </ul>
                </div>
                <div className="space-y-10 sm:w-1/2 xl:basis-1/4 shrink-0">
                    <h3 className='text-xl font-semibold'>Have a Question ?</h3>
                    <ul className='space-y-4'>
                        <li className='flex gap-4 text-gray-400'>
                            <MapPin size={25} className='shrink-0' />
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </li>
                        <li className='flex gap-4 text-gray-400'>
                            <PhoneCallIcon size={25} />
                            <p>+2 392 3929 210</p>
                        </li>
                        <li className='flex gap-4 text-gray-400'>
                            <MailIcon size={25} />
                            <p>info@yourdomain.com</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </main>
    )
}
