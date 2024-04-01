import React from 'react'
import Heading from '../home/Heading'
import Container from '../home/Container'
import TestimonyContainer from './TestimonyContainer'

export default function Testimony() {
    return (
        <main id='testimony' className='bg-green-400 mt-32 py-32'>
            <Heading
                className='text-white'
                title='happy clients'
            />
            <TestimonyContainer />
        </main>
    )
}
