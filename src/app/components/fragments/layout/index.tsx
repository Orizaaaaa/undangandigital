'use client'
import React, { useEffect, useState } from 'react'
import './layout.scss'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { BiMapAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import Link from 'next/link';
import { MdOutlineMusicNote } from "react-icons/md";
import { useSelector } from 'react-redux';

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

    const [isPlaying, setIsPlaying] = useState(false);
    const audioUrl = '/music.mp3';

    useEffect(() => {
        const audio = new Audio(audioUrl);
        audio.play();
        setIsPlaying(true);

        return () => {
            // Membersihkan audio saat komponen di-unmount
            audio.pause();
            setIsPlaying(false);
        };
    }, []); // Efek hanya dijalankan saat komponen dimuat pertama kali

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };


    const user = useSelector((state: any) => state.user.userList);



    return (
        <section className='layout flex flex-col lg:flex-row  relative' >
            <div className="hero-1 hidden lg:block">
                <button onClick={togglePlay} className='absolute top-0 right-0 text-3xl font-bold bg-white p-3 mr-1 mt-1 shadow-lg rounded-full' >
                    <MdOutlineMusicNote />
                </button>
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

                <div className="w-full flex justify-center lg:hidden">
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