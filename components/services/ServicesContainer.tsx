import React from 'react'
import Container from '../home/Container'
import { Tabs } from '../ui/tabs'
import Image from 'next/image'
import { ChevronRight } from "lucide-react";

import TabsContentContainer from './TabsContentContainer'
import TabListContainer from './TasListContainer'

export default function ServicesContainer() {
    return (
        <section id='services'>
            <Container>
                <Tabs defaultValue="account" className="h-full flex flex-col lg:flex-row lg:gap-20">
                    <TabListContainer />
                    <TabsContentContainer />
                </Tabs>
            </Container>
            <div className="h-[80vh] -mt-[10vh] relative">
                <Image alt='banner' src='/office.jpg' width={2000} height={2000} className="object-cover w-full h-full -z-50" />
                <div className="w-full h-full absolute top-0 py-0.5 right-0 flex flex-col items-end gap-0.5">
                    {
                        Array(4).fill('q').map((_, idx) => (
                            <div className="bg-white bg-opacity-90 h-[25%] p-6 hover:-translate-x-5 w-full lg:w-1/2 transition-transform group" key={idx}>
                                <div className="flex gap-5">
                                    <div className="text-green-400 flex items-center justify-center group-hover:rotate-180 transition-transform">
                                        <ChevronRight />
                                    </div>
                                    <div className="flex flex-col justify-center gap-3">
                                        <h1 className="text-2xl text-green-400 font-semibold">Market Research</h1>
                                        <p>Even the all-powerful pointing has no control on the blind</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
