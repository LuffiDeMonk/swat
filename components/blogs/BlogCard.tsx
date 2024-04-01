import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { MessageSquareTextIcon } from 'lucide-react'

export default function BlogCard() {
    return (
        <div className='min-h-96 sm:min-h-[28rem] lg:min-h-full sm:px-6 md:px-12 lg:px-0'>
            <div className="h-56 sm:h-80 relative">
                <Image
                    src='/office.jpg'
                    alt='blog'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'
                />
                <h2 className='text-xl font-semibold mt-1.5 text-gray-700 hover:text-green-400 transition-colors'>Why Lead Generation is Key for Business Growth</h2>
                <p className='text-base my-2 text-gray-500'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className="flex items-center justify-between mt-10">
                    <Button>Read More</Button>
                    <div className='flex gap-3 items-center text-gray-500'>
                        <span className='text-base cursor-pointer font-semibold'>Admin</span>
                        <div className='flex items-center gap-1.5 text-sm'>
                            <MessageSquareTextIcon className='size-4' />
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
