import React from 'react'
import Container from '../home/Container'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import StaffContainer from './StaffContainer'

export default function Staffs() {
    return (
        <Container>
            <Subheading
                title='about us'
            />
            <Heading
                title='our staff'
            />
            <p className='text-center text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia</p>
            <StaffContainer />
        </Container>
    )
}
