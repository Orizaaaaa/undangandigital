'use client'
import Card from '@/app/components/fragments/card'
import './testimoni.scss'
import Image from 'next/image'
import { customer } from '@/app/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonies = () => {
    return (
        <section className="testimonies mt-[6rem] mb-4" id="testimonies">
            <div className="text-center">
                <h1 className="text-xl  lg:text-3xl font-bold" >Apa Kata Mereka ?</h1>
                <p>Ini adalah yang mereka katakan tentang kami dan undangan digital</p>
            </div>
            <div className="caraosel mt-8">



                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card className='flex items-center  gap-3' >
                            <Image className='rounded-l-lg' src={customer} alt="example" />
                            <p>Pasti Dateng adalah
                                platform custom website undangan pernikahan
                                digital yang luar biasa. Dengan desain responsif</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='flex items-center  gap-3' >
                            <Image className='rounded-l-lg' src={customer} alt="example" />
                            <p>Pasti Dateng adalah
                                platform custom website undangan pernikahan
                                digital yang luar biasa. Dengan desain responsif</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='flex items-center  gap-3' >
                            <Image className='rounded-l-lg' src={customer} alt="example" />
                            <p>Pasti Dateng adalah
                                platform custom website undangan pernikahan
                                digital yang luar biasa. Dengan desain responsif</p>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='flex items-center  gap-3' >
                            <Image className='rounded-l-lg' src={customer} alt="example" />
                            <p>Pasti Dateng adalah
                                platform custom website undangan pernikahan
                                digital yang luar biasa. Dengan desain responsif</p>
                        </Card>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    )
}

export default Testimonies