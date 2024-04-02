import React from 'react'
import Subheading from '../home/Subheading'
import Heading from '../home/Heading'
import { MapPinIcon } from 'lucide-react'
import Container from '../home/Container'
import ContactForm from './ContactForm'
import dynamic from 'next/dynamic'
import MapLoading from './MapLoading'

const LocationMap = dynamic(() => import('@/components/contact/MapContainer'), {
    ssr: false,
    loading: () => <MapLoading />

})

export default function Contact() {
    return (
        <section id='contact' className='pt-32'>
            <Subheading
                title='contact'
            />
            <Heading
                title='contact us'
            />
            <p className='text-gray-500 text-center'>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia</p>
            <Container className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
                {
                    Array(4).fill('1').map((_, idx) => (
                        <div
                            key={idx}
                            className='h-80 rounded-sm text-white bg-gradient-to-r from-lime-300 to-green-400 flex flex-col items-center justify-around'
                        >
                            <div className='bg-green-500 size-28 rounded-full flex items-center justify-center'>
                                <MapPinIcon className='size-10' />
                            </div>
                            <p className='text-base text-center uppercase font-semibold'>Address</p>
                            <p className='text-base text-center'>198 West 21th Street, Suite <br />721 New York NY 10016</p>
                        </div>
                    ))
                }
            </Container>
            <Container className='flex flex-col lg:flex-row mt-12'>
                <LocationMap />
                <ContactForm />
            </Container>
        </section>
    )
}
