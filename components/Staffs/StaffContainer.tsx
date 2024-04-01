import React from 'react'
import StaffCard from './StaffCard'

export default function StaffContainer() {
    return (
        <div className='mt-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                Array(4).fill('a').map((_, idx) => (
                    <StaffCard key={idx} />
                ))
            }
        </div>
    )
}
