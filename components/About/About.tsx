import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import Image from 'next/image'
import Staffs from '../Staffs/Staffs'

export default function About() {
    return (
        <section id='about'>
            <Container className="py-10 h-screen flex gap-16 lg:items-center">
                <div className="w-96 h-full shrink-0 relative hidden lg:block">
                    <Image src="/office.jpg" alt="office" width={400} height={400} className='w-full h-full object-cover' />
                </div>
                <div className=''>
                    <div className='space-y-3'>
                        <Subheading
                            className='text-start'
                            title='welcome to digilab'
                        />
                        <Heading
                            className='capitalize text-start'
                            title='we are a digital agency'
                        />
                    </div>
                    <div className='mt-8 space-y-10 xl:space-y-16'>
                        <p className='text-gray-500 text-sm sm:text-base'>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br /> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. <br /> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                        <div className='bg-green-400 w-[80%] xl:w-1/2 text-base md:text-xl xl:text-2xl p-4 capitalize lg:relative lg:-left-32 lg:text-right'>
                            <p>20</p>
                            <p>years of experience</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Staffs />
        </section>
    )
}
