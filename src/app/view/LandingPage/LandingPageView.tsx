import Navbar from "@/app/components/organism/landingpage/navbar"
import Home from "@/app/components/organism/landingpage/home"
import Instruction from "@/app/components/organism/landingpage/instruction"
import Theme from "@/app/components/organism/landingpage/theme"
import Fitur from "@/app/components/organism/landingpage/fitur"
import Price from "@/app/components/organism/landingpage/price"
import PaymentMethod from "@/app/components/organism/landingpage/paymentMethod"

const LandingPageView = () => {
    return (
        <>
            <Navbar />
            {/* <Home /> */}
            <Instruction />
            <Theme />
            <Fitur />
            <Price />
            <PaymentMethod />
        </>
    )
}

export default LandingPageView