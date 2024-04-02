import React from 'react'
import Container from '../home/Container'
import { SliderWrapper } from '../projects/ProjectSliderImport'
import { TestimonySlider as settings } from '@/settings/SliderConstant'
import TestimonyCard from './TestimonyCard'

export default function TestimonyContainer() {
    return (
        <section id='testimony'>
            <Container>
                <SliderWrapper {...settings} className='pt-4'>
                    {
                        Array(6).fill('a').map((_, idx) => (
                            <div key={idx} className='pr-2 md:px-3 lg:px-5 xl:pr-3'>
                                <TestimonyCard />
                            </div>
                        ))
                    }
                </SliderWrapper>
            </Container>
        </section>
    )
}
