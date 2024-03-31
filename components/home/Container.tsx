import { cn } from '@/lib/utils'
import React from 'react'

type ContainerProps = {
    className?: string,
    children: React.ReactNode,
}

export default function Container({ className, children }: ContainerProps) {
    return (
        <section className={cn("max-w-6xl mx-auto px-2", className)}>
            {children}
        </section>
    )
}
