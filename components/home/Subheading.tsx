import { cn } from '@/lib/utils'
import React from 'react'

type SubheadingProps = {
    title: string,
    className?: string
}

export default function Subheading({ title, className }: SubheadingProps) {
    return (
        <p className={cn("text-center uppercase text-xs sm:text-sm md:text-base tracking-widest text-green-400", className)}>{title}</p>
    )
}
