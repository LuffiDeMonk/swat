'use client'
import React from 'react'
import useHash from '@/helper/useHash'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
    let hash = useHash()
    return (
        <section className='hidden xl:flex items-center gap-6'>
            {
                Links.map(link => (
                    <Link href={link.hash} key={link.id} className={cn(`${hash !== undefined && hash === link.name.toLowerCase() ? "text-green-400" : ""}`)}>{link.name}</Link>
                ))
            }
        </section>
    )
}
