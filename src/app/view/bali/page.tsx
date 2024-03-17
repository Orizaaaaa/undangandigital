import LayoutTheme from "@/app/components/fragments/layout"
import { flower, introIntivitation, userBali1 } from "@/app/image"
import './bali.scss'
import Image from "next/image"
import { SlMouse } from "react-icons/sl";
import { forumFont, playballFont } from "@/app/utils/font";

const BaliTheme = () => {
    return (
        <LayoutTheme image={userBali1} >
            <section className="bali-theme ">
                <div className="hero-1-bali flex flex-col items-center justify-center">
                    <h1 className="mb-7 text-2xl" style={{ fontFamily: forumFont.style.fontFamily }}>THE WEDDING OF</h1>
                    <Image className="w-60 h-60" src={introIntivitation} alt='userBali' />
                    <div className="flex relative gap-1 mt-16" >
                        <div className="flex ">
                            <h2 className="text-[60px] font-semibold " style={{ fontFamily: playballFont.style.fontFamily }} >G </h2>
                            <Image className="h-10 w-10 absolute mt-4 right-0" src={flower} alt='flower' />
                        </div>
                        <h2 className="text-[60px] font-semibold mt-5" style={{ fontFamily: playballFont.style.fontFamily }} >I</h2>
                    </div>

                    <h3 className={`mt-16 text-lg ${forumFont.className}`} >Sabtu, 19 Oktober 2024</h3>
                    <div className="flex flex-col justify-center items-center mt-8" >
                        <SlMouse color="#fff" size={30} />
                        <p className={`mb-3 text-lg mt-2 ${forumFont.className}`}>scroll ke bawah</p>
                    </div>
                </div>
                <div className="hero-2-bali" id="hero-2-bali">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum dicta eius voluptas officiis expedita hic nesciunt doloribus aspernatur velit a natus cum culpa quas est, quisquam eos repellat aliquam.
                </div>
            </section>
        </LayoutTheme>
    )
}

export default BaliTheme