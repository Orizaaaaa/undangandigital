import Navbar from "@/app/components/organism/landingpage/navbar"
import Home from "@/app/components/organism/landingpage/home"
import Instruction from "@/app/components/organism/landingpage/instruction"
import Theme from "@/app/components/organism/landingpage/theme"
import Fitur from "@/app/components/organism/landingpage/fitur"
import Price from "@/app/components/organism/landingpage/price"
import PaymentMethod from "@/app/components/organism/landingpage/paymentMethod"
import Testimonies from "@/app/components/organism/landingpage/testimonies"
import Faq from "@/app/components/organism/landingpage/faq"
import Footer from "@/app/components/organism/landingpage/footer"

const LandingPageView = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Instruction />
            <Theme />
            <Fitur />
            <Price />
            <PaymentMethod />
            <Testimonies />
            <Faq />
            <Footer />
        </>
    )
}

export default LandingPageView