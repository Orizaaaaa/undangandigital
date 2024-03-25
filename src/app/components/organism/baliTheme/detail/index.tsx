import React from 'react'
import './index.scss'
import Image from 'next/image'
import { bgDecor, introIntivitation } from '@/app/image'

const DetailInfo = () => {
    return (
        <div className="hero-3-bali flex flex-col items-center justify-center px-4 pt-32 ">
            <div className="image-section p-[74px]">
                <Image src={introIntivitation} alt='decor' className='h-52 w-52 border-4 border-yellow-900 rounded-full p-0 m-0' />
            </div>

        </div>
    )
}

export default DetailInfo