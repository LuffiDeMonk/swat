import { cn } from '@/lib/utils'
import React from 'react'

type HeadingProps = {
    className?: string,
    title: string
}

export default function Heading({ className, title }: HeadingProps) {
    return (
        <h1 className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center mt-4 mb-8", className)}>{title}</h1>
    )
}
