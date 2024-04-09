'use client'

import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Container from './Container'
import { cn } from '@/lib/utils'

import DesktopNavigation from './DesktopNavigation'
import Link from 'next/link'



const variants = {
    hidden: {
        y: '-100%',
    },
    animate: {
        y: 0,
        transition: {
            ease: 'easeIn'
        }
    }
}

export default function Navbar() {
    const [hide, setHide] = useState(true)
    const [background, setBackground] = useState(true)
    const { scrollY } = useScroll()


    useMotionValueEvent(scrollY, 'change', (updated) => {
        let previous = scrollY.getPrevious()
        if (updated === 0) {
            setBackground(true)
            return
        }
        if (updated > previous!) {
            setHide(false)
            return
        }
        if (previous! > updated && updated !== 0) {
            setBackground(false)
            setHide(true)
            return
        }
    })
    return (
        <motion.nav
            variants={variants}
            animate={hide ? 'animate' : 'hidden'}
            className={cn('fixed top-0 left-0 w-full z-[999] transition-colors', `${background ? "bg-transparent" : "bg-white drop-shadow-lg"}`)}>
            <Container className='flex items-center justify-between h-16'>
                <Link href='#home'>
                    <h1 className='text-4xl font-extrabold uppercase'>sw<span className='text-green-400'>at</span></h1>
                </Link>
                <DesktopNavigation />
            </Container>
        </motion.nav>
    )
}
