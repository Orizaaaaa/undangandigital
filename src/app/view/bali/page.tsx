import LayoutTheme from "@/app/components/fragments/layout"
import { flower, introIntivitation, userBali1 } from "@/app/image"
import './bali.scss'
import Image from "next/image"
import { SlMouse } from "react-icons/sl";
import { forumFont, playballFont } from "@/app/utils/font";
import Intro from "@/app/components/organism/baliTheme/intro";
import DetailInfo from "@/app/components/organism/baliTheme/detail";
import LoveStory from "@/app/components/organism/baliTheme/loveStory";
import Moment from "@/app/components/organism/baliTheme/moment";


const BaliTheme = () => {

    return (
        <LayoutTheme image={userBali1} >
            <section className="bali-theme ">
                <Intro />
                <DetailInfo />
                <LoveStory />
                <Moment />
            </section>
        </LayoutTheme >
    )
}

export default BaliTheme