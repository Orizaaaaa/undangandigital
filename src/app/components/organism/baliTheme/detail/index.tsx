import React from 'react'
import './index.scss'
import Image from 'next/image'
import { bgDecor } from '@/app/image'

const DetailInfo = () => {
    return (
        <div className="hero-3-bali flex flex-col items-center justify-center px-4 pt-32">
            <div className="w-96 relative">
                <Image src={bgDecor} alt='decor' className='w-full' />
                <div className='absolute top-[50%] left-[45%] w-96'>

                </div>
            </div>
        </div>
    )
}

export default DetailInfo