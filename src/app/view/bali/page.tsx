import LayoutTheme from "@/app/components/fragments/layout"
import { userBali1 } from "@/app/image"
import './bali.scss'
import Intro from "@/app/components/organism/baliTheme/intro";
import DetailInfo from "@/app/components/organism/baliTheme/detail";
import LoveStory from "@/app/components/organism/baliTheme/loveStory";
import MomentAndPray from "@/app/components/organism/baliTheme/momentAndPray";


const BaliTheme = () => {

    return (
        <LayoutTheme image={userBali1} >
            <section className="bali-theme ">
                <Intro />
                <DetailInfo />
                <LoveStory />
                <MomentAndPray />
            </section>
        </LayoutTheme >
    )
}

export default BaliTheme