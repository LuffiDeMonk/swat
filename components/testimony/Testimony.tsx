import React from 'react'
import Heading from '../home/Heading'
import TestimonyContainer from './TestimonyContainer'
import { MotionDiv } from '../home/MotionDiv'

const variants = {
    hidden: {
        opacity: 0,
        y: 70
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
        }
    }
}


export default function Testimony() {
    return (
        <main id='testimony' className='bg-green-400 mt-32 py-32'>
            <MotionDiv variants={variants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
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
