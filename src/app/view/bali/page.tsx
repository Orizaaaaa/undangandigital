import LayoutTheme from "@/app/components/fragments/layout"
import { introIntivitation, userBali1 } from "@/app/image"
import './bali.scss'
import Image from "next/image"

const BaliTheme = () => {
    return (
        <LayoutTheme image={userBali1} >
            <section className="bali-theme flex items-center justify-center">
                <p>asu</p>
            </section>
        </LayoutTheme>
    )
}

export default BaliTheme