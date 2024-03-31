import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import ProjectSlider from './ProjectSlider'

export default function ProjectContainer() {
    return (
        <div className='bg-gray-100 py-20'>
            <Container >
                <Subheading
                    title='accomplishments'
                />
                <Heading
                    title='our projects'
                    className='mt-4 mb-8'
                />
                <p className="text-center text-gray-400">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <ProjectSlider />
            </Container>
        </div>
    )
}