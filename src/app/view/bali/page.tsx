import LayoutTheme from "@/app/components/fragments/layout"
import { introIntivitation, userBali1 } from "@/app/image"
import './bali.scss'
import Image from "next/image"
import { SlMouse } from "react-icons/sl";

const BaliTheme = () => {
    return (
        <LayoutTheme image={userBali1} >
            <section className="bali-theme ">
                <div className="hero-1-bali flex flex-col items-center justify-center">
                    <h1 className="mb-7 text-2xl">THE WEDDING OF</h1>
                    <Image className="w-60 h-60" src={introIntivitation} alt='userBali' />
                    <h2 className="mt-20 text-2xl font-semibold" >Gabriel & Ilham</h2>
                    <h3 className="mt-16" >Sabtu, 19 Oktober 2024</h3>
                    <div className="flex flex-col justify-center items-center mt-8">
                        <p className="mb-3">scroll ke bawah</p>
                        <SlMouse color="#fff" size={30} />
                    </div>
                </div>
            </section>
        </LayoutTheme>
    )
}

export default BaliTheme