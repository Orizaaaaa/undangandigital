import React from 'react'
import './index.scss'
import Image from 'next/image'
import { flower, introIntivitation, } from '@/app/image'
import { forumFont, playballFont } from '@/app/utils/font'

const DetailInfo = () => {
    return (
        <div className="hero-3-bali flex flex-col items-center justify-center px-4 pt-32 ">
            <h1 className='text-white text-2xl mb-3' style={{ fontFamily: playballFont.style.fontFamily }}>The Wedding Of</h1>

            {/* image section */}
            <div className="image-section-bali p-[120px]">
                <div>
                    <Image src={introIntivitation} alt='decor' className=' max-h-[300px] w-[100vw] border-4 border-yellow-900 rounded-full p-0 m-0 object-cover' />
                </div>
            </div>

            {/* name of the user */}
            <h1 className='text-white text-2xl ' style={{ fontFamily: playballFont.style.fontFamily }} >Gabriel Yonathan</h1>
            <p className='text-white' style={{ fontFamily: forumFont.style.fontFamily }}>dari lembang</p>
            <div className="flex m-4">
                <h2 className="text-[60px] font-semibold text-white" style={{ fontFamily: playballFont.style.fontFamily }} >&</h2>
                <Image className="h-10 w-10 absolute mt-4 ms-7" src={flower} alt='flower' />
            </div>

            <h1 className='text-white text-2xl ' style={{ fontFamily: playballFont.style.fontFamily }} >Ilham Sahidan</h1>
            <p className='text-white' style={{ fontFamily: forumFont.style.fontFamily }}>dari lembang</p>
            {/* image section */}
            <div className="image-section-bali p-[120px]">
                <div>
                    <Image src={introIntivitation} alt='decor' className=' max-h-[300px] w-[100vw] border-4 border-yellow-900 rounded-full p-0 m-0 object-cover' />
                </div>
            </div>

        </div>
    )
}

export default DetailInfo