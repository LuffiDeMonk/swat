import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import BlogContainer from './BlogContainer'
import { MotionDiv } from '../home/MotionDiv'
import { variants } from '../animation'



export default function Blogs() {
    return (
        <section id='blog' className='bg-gray-100 py-32'>
            <Container>
                <MotionDiv variants={variants} initial='initial' whileInView='whileInView' viewport={{ once: true }}>
                    <MotionDiv variants={variants}>
                        <Subheading
                            title='blog'
                        />
                    </MotionDiv>
                    <MotionDiv variants={variants}>
                        <Heading
                            title='our blogs'
                        />
                    </MotionDiv>
                    <MotionDiv variants={variants}>
                        <p className='text-gray-500 text-center'>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia</p>
                    </MotionDiv>
                    <MotionDiv variants={variants}>
                        <BlogContainer />
                    </MotionDiv>
                </MotionDiv>
            </Container>
        </section>
    )
}
