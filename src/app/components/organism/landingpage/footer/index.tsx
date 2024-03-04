import React from 'react'
import './footer.scss'
import Link from 'next/link'
import { navigation } from '@/app/utils/dataObject'


const Footer = () => {
    return (
        <section className='footer mt-[6rem]' id="footer" >
            <div className="container   mx-auto py-[4rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="left p-3 sm:p-0">
                        <h1>OUR WEDDING INVITATION WILL LEAVE YOU BREATHLESS ON YOUR SPECIAL DAY</h1>
                        <h2 className='text-lg ' >Copyright 2024 © Pasti Dateng. </h2>
                    </div>
                    <div className="right mx-0 mt-3 lg:mt-0 lg:mx-auto p-3 sm:p-0">
                        <h1 className='text-xl font-semibold'>SITEMAP</h1>
                        <div className="flex gap-5">
                            {navigation.map((item, index) => (
                                <Link key={index} className='text-lg ' href={`#${item.location}`} >{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer