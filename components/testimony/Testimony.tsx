import React from 'react'
import Heading from '../home/Heading'
import TestimonyContainer from './TestimonyContainer'
import { MotionDiv } from '../home/MotionDiv'
import { variants } from '../animation'



export default function Testimony() {
    return (
        <main id='testimony' className='bg-green-400 mt-32 py-32'>
            <MotionDiv variants={variants} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
                <MotionDiv variants={variants}>
                    <Heading
                        className='text-white'
                        title='happy clients'
                    />
                </MotionDiv>
                <MotionDiv variants={variants}>
                    <TestimonyContainer />
                </MotionDiv>
            </MotionDiv>
        </main>
    )
}
