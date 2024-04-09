import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import ProjectSlider from './ProjectSlider'
import { MotionDiv } from '../home/MotionDiv'
import { variants } from '../animation'

export default function ProjectContainer() {
    return (
        <section className='bg-gray-100 py-20 h-full' id='projects'>
            <Container>
                <MotionDiv variants={variants} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
                    <MotionDiv variants={variants}>
                        <Subheading
                            title='accomplishments'
                        />
                    </MotionDiv>
                    <MotionDiv variants={variants}>
                        <Heading
                            title='our projects'
                        />
                    </MotionDiv>
                    <MotionDiv variants={variants}>
                        <p className="text-center text-gray-400">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </MotionDiv>
                    <MotionDiv variants={variants}>
                        <ProjectSlider />
                    </MotionDiv>
                </MotionDiv>
            </Container>
        </section >
    )
}
