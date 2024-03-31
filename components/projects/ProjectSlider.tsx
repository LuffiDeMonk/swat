import React from 'react'
import { SliderWrapper } from './ProjectSliderImport'
import { ProjectSlider as settings } from '@/settings/SliderConstant'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function ProjectSlider() {
    return (
        <SliderWrapper
            className='mt-20 xl:px-8'
            {...settings}
        >
            {
                Array(6).fill('1').map((_, idx) => (
                    <div key={idx} className='w-full sm:pr-4 lg:pr-6 xl:pr-10'>
                        <div
                            className='h-96 relative overflow-hidden group'
                        >
                            <div
                                className="absolute bottom-0 left-0 w-full p-5 bg-green-400 opacity-0 group-hover:opacity-100 transition-all z-10 duration-700 space-y-3 text-white"
                            >
                                <h2 className='text-xl font-semibold'>Work Name</h2>
                                <p>Your work here</p>
                            </div>
                            <Image
                                src='/office.jpg'
                                alt='card'
                                width={800}
                                height={800}
                                className='w-full h-full object-cover group-hover:scale-125 transiton-all duration-700 ease-in-out'
                            />
                        </div>
                    </div>
                ))
            }
        </SliderWrapper>
    )
}
