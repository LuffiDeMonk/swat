import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import BlogContainer from './BlogContainer'

export default function Blogs() {
    return (
        <section id='blog' className='bg-gray-100 py-32'>
            <Container>
                <Subheading
                    title='blog'
                />
                <Heading
                    title='our blogs'
                />
                <p className='text-gray-500 text-center'>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia</p>
                <BlogContainer />
            </Container>
        </section>
    )
}
