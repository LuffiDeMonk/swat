import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function TestimonyCard() {
    return (
        <div className='relative'>
            <div className="absolute left-1/2 -translate-x-1/2 -mt-16 size-32 bg-green-400 z-10 rounded-full p-2">
                <div className="absolute z-20 bottom-0 right-0 bg-gradient-to-r from-lime-400 via-green-400 to-green-500 size-10 rounded-full flex items-center justify-center">
                    <Quote className='size-4 fill-white text-white rotate-180' />
                </div>
                <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                        src='/office.jpg'
                        alt='testimony'
                        width={128}
                        height={128}
                        className='absolute w-full h-full'
                    />
                </div>
            </div>
            <div className="mt-16 px-2.5 bg-white min-h-80 md:min-h-96 lg:min-h-80 rounded-sm pt-20 flex items-center justify-around flex-col">
                <p className='text-gray-500 text-lg text-center'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur autem, labore
                </p>
                <div className='space-y-1 text-center'>
                    <h1 className='font-semibold text-lg'>John Fox</h1>
                    <p className='text-gray-500 text-base'>Businessman</p>
                </div>
            </div>
        </div>
    )
}
