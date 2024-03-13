import React from 'react'
import './layout.scss'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { BiMapAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import Link from 'next/link';
type LayoutThemeProps = {
    children: React.ReactNode
    image: string,
    navigation?: React.ReactNode
}

const LayoutTheme = ({ children, image, navigation }: LayoutThemeProps) => {
    const dataNav = [
        {
            location: '#bali',
            icon: <FaHeart color='#523E27' size={23} />
        },
        {
            location: '#bali',
            icon: <FaImage color='#523E27' size={23} />
        },
        {
            location: '#bali',
            icon: <MdCalendarToday color='#523E27' size={23} />
        },
        {
            location: '#bali',
            icon: <BiMapAlt color='#523E27' size={23} />
        },
        {
            location: '#bali',
            icon: <BsPencilSquare color='#523E27' size={23} />
        }
    ]
    return (
        <section className='layout flex flex-col lg:flex-row  relative' >
            <div className="hero-1 hidden lg:block">
                <div className="navbar-side flex flex-col absolute top-[40%] right-0 mr-2 text-3xl font-bold bg-cream rounded-full p-4 gap-3 items-center justify-center">

                    {dataNav.map((item, index) => (
                        <Link href={item.location} key={index}>
                            {item.icon}
                        </Link>
                    ))}

                </div>
                <Image src={image} alt='userBali' />
            </div>
            <div className="hero-2 relative">
                {children}
                <div className="w-full flex justify-center">
                    <div className="flex flex-row fixed bottom-0 mb-2 text-3xl font-bold bg-cream rounded-full p-4 gap-3 items-center justify-center ">
                        {dataNav.map((item, index) => (
                            <Link href={item.location} key={index}>
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>

    )
}

export default LayoutTheme