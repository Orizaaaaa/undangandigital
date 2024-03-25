import { forumFont, playballFont } from '@/app/utils/font'
import './index.scss'
import Card from '@/app/components/fragments/card'
import { LuClock2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import ButtonPrimary from '@/app/components/elements/buttonPrimary/Button';

const Moment = () => {
    return (
        <section className="hero-5-bali">
            <div className="bali-vidio p-3">
                <div className="desc p-3">
                    <h1 className='text-xl text-center m-4' style={{ fontFamily: playballFont.style.fontFamily }} >Moment Yang Berharga</h1>
                    <p>"Menciptakan kenangan adalah hadiah yang tak ternilai harganya. Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu singkat." </p>
                </div>
                {/* vidio */}
                {/* <iframe
                    className="w-full h-72"
                    src="https://www.youtube.com/embed/FF3fuYLnApQ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe> */}

                {/* caraosel */}


            </div>

            {/* date */}
            {/* <div className="date-and-time">
                <Card>
                    <div className="p-3">
                        <h1 className='text-xl text-center m-4 text-white' style={{ fontFamily: playballFont.style.fontFamily }} >Date 20 November 2022</h1>
                        <div className="time flex justify-center items-center gap-2">
                            <LuClock2 color='white' />
                            <p className='text-white' style={{ fontFamily: forumFont.style.fontFamily }} >pukul 09:00 WIB - selesai</p>
                        </div>
                        <div className="location flex justify-center items-center gap-2 ">
                            <IoLocationOutline color='white' />
                            <p className='text-white' style={{ fontFamily: forumFont.style.fontFamily }} > Plataran Menteng,  RT.6/RW.4, Gondangdia, Kota Jakarta Pusat </p>
                        </div>
                        <div className="flex justify-center items-center mt-4">
                            <ButtonPrimary className='rounded-[200px] py-2 px-5 text-base  transition duration-300 '>  Lihat Lokasi </ButtonPrimary>
                        </div>

                    </div>
                </Card>
            </div> */}

            {/* map */}

        </section>
    )
}

export default Moment