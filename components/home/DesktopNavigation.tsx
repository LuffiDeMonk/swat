'use client'
import Link from 'next/link'
import React from 'react'

const Links = [
    {
        id: 1,
        name: 'Home',
        hash: '#home'
    },
    {
        id: 2,
        name: 'Services',
        hash: '#services'
    },
    {
        id: 3,
        name: 'Projects',
        hash: '#projects'
    },
    {
        id: 4,
        name: 'About',
        hash: '#about'
    },
    {
        id: 5,
        name: 'Testimony',
        hash: '#testimony'
    },
    {
        id: 6,
        name: 'Blog',
        hash: '#blog'
    },
    {
        id: 7,
        name: 'Contact',
        hash: '#contact'
    }
]

export default function DesktopNavigation() {
    return (
        <section className='hidden xl:flex items-center gap-6'>
            {
                Links.map(link => (
                    <Link href={link.hash} key={link.id} className=''>{link.name}</Link>
                ))
            }
        </section>
    )
}
