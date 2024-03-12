import React from 'react'
import './layout.scss'
import Image from 'next/image'
import { userBali1 } from '@/app/image'
type LayoutThemeProps = {
    children: React.ReactNode
    image: string
}

const LayoutTheme = ({ children, image }: LayoutThemeProps) => {
    return (
        <section className='layout flex flex-row' >
            <div className="hero-1 ">
                <Image src={image} alt='userBali' />
            </div>
            <div className="hero-2 bg-green-600  ">
                {children}
            </div>
        </section>

    )
}

export default LayoutTheme