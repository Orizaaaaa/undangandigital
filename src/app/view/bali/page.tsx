import LayoutTheme from "@/app/components/fragments/layout"
import { flower, introIntivitation, userBali1 } from "@/app/image"
import './bali.scss'
import Image from "next/image"
import { SlMouse } from "react-icons/sl";
import { forumFont, playballFont } from "@/app/utils/font";
import Intro from "@/app/components/organism/baliTheme/intro";


const BaliTheme = () => {

    return (
        <LayoutTheme image={userBali1} >
            <Intro />
        </LayoutTheme >
    )
}

export default BaliTheme