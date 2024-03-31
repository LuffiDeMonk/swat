import React from 'react'
import Container from './Container'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full'>
            <Container className='flex items-center gap-5'>
                <Link href="#services">Services</Link>
                <Link href="#random">Random</Link>
            </Container>
        </nav>
    )
}
