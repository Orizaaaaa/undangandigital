import LayoutTheme from "@/app/components/fragments/layout"
import { introIntivitation, userBali1 } from "@/app/image"
import './bali.scss'
import Image from "next/image"

const BaliTheme = () => {
    return (
        <LayoutTheme image={userBali1} >
            <section className="bali-theme">
                <div className="hero-1 flex items-center">
                    <h1>bali</h1>
                </div>
            </section>
        </LayoutTheme>
    )
}

export default BaliTheme