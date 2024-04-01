'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const formValidation = z.object({
    name: z.string().min(1, 'This is are required field'),
    email: z.string().min(1, "This is a required field").email("Please enter valid email"),
    subject: z.string().min(1, 'This is a required field'),
    message: z.string().min(1, "This is a required field")
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof formValidation>>({
        resolver: zodResolver(formValidation)
    })
    const onSubmit: SubmitHandler<z.infer<typeof formValidation>> = (data) => { console.log(data) }
    return (
        <section className='bg-gray-200 p-6 basis-1/2 shrink-0 order-1 lg:order-2'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Your Name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Your Email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='subject'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Subject' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder='Message' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button size='lg'>Send Message</Button>
                </form>
            </Form>
        </section>
    )
}
