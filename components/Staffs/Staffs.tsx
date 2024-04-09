'use client'

import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import StaffContainer from './StaffContainer'
import { MotionDiv } from '../home/MotionDiv'
import { variants } from '../animation'

export default function Staffs() {
    return (
        <Container>
            <MotionDiv variants={variants} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
                <MotionDiv variants={variants}>
                    <Subheading
                        title='about us'
                    />
                </MotionDiv>
                <MotionDiv variants={variants}>
                    <Heading
                        title='our staff'
                    />
                </MotionDiv>
                <MotionDiv variants={variants}>
                    <p className='text-center text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia</p>
                </MotionDiv>
                <MotionDiv variants={variants}>
                    <StaffContainer />
                </MotionDiv>
            </MotionDiv>
        </Container>
    )
}
