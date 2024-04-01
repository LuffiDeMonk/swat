import React from 'react'
import Container from '../home/Container'
import { SliderWrapper } from '../projects/ProjectSliderImport'
import { TestimonySlider as settings } from '@/settings/SliderConstant'
import TestimonyCard from './TestimonyCard'

export default function TestimonyContainer() {
    return (
        <Container>
            <SliderWrapper {...settings}>
                {
                    Array(6).fill('a').map((_, idx) => (
                        <div key={idx} className='pr-2 md:px-3 lg:px-5 xl:pr-5'>
                            <TestimonyCard />
                        </div>
                    ))
                }
            </SliderWrapper>
        </Container>
    )
}
