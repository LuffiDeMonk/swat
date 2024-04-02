import React from 'react'
import BlogCard from './BlogCard'

export default function BlogContainer() {
    return (
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mb-56'>
            {Array(3).fill('a').map((_, idx) => (
                <BlogCard key={idx} />
            ))}
        </div>
    )
}
