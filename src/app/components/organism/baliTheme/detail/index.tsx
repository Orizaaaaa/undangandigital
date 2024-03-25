import React from 'react'
import './index.scss'
import Image from 'next/image'
import { bgDecor, introIntivitation, userBali1 } from '@/app/image'

const DetailInfo = () => {
    return (
        <div className="hero-3-bali flex flex-col items-center justify-center px-4 pt-32 ">
            <div className="image-section-bali p-[120px]">
                <div>
                    <Image src={introIntivitation} alt='decor' className=' max-h-[300px] w-[100vw] border-4 border-yellow-900 rounded-full p-0 m-0 object-cover' />
                </div>
            </div>
        </div>
    )
}

export default DetailInfo