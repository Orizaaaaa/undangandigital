import React from 'react'
import './footer.scss'
import Link from 'next/link'
import { navigation } from '@/app/utils/dataObject'


const Footer = () => {
    return (
        <section className='footer mt-[6rem]' id="footer" >
            <div className="container   mx-auto py-[4rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5">
                    <div className="left p-3 sm:p-0">
                        <h1>OUR WEDDING INVITATION WILL LEAVE YOU BREATHLESS ON YOUR SPECIAL DAY</h1>
                        <h2 className='text-lg ' >Copyright 2024 © Pasti Dateng. </h2>
                    </div>
                    <div className="right mx-0 mt-3 lg:mt-0 lg:mx-auto p-3 sm:p-0">
                        <h1 className='text-xl font-semibold text-center sm:text-left mb-3 sm:mb-0'>SITEMAP</h1>
                        <div className="grid  grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 ">
                            {navigation.map((item, index) => (
                                <Link key={index} className='text-lg text-center sm:text-left ' href={`#${item.location}`} >{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer