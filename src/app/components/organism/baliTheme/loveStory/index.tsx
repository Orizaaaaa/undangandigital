import { forumFont, playballFont } from '@/app/utils/font'
import './index.scss'
import Image from 'next/image'
import { lovestoryImg } from '@/app/image'
const LoveStory = () => {
    return (
        <section className="hero-4-bali flex flex-col items-center justify-center px-4 py-10 ">
            <div className="px-9">
                <div className="card-wrapper px-3 rounded-xl ">
                    <h1 className='text-center py-5 text-2xl text-white' style={{ fontFamily: playballFont.style.fontFamily }}>Our Love Story </h1>
                    <div className="cardlist grid grid-rows-1 gap-10 py-5">

                        <div className="card-item">
                            <Image src={lovestoryImg} alt='decor' className='rounded-t-lg h-80 w-full object-cover' />
                            <div className="desc bg-slate-300 rounded-b-lg">
                                <h2 className='text-center relative bottom-4 text-xl text-neutral-500' style={{ fontFamily: playballFont.style.fontFamily }}>2019 </h2>
                                <p className='text-center text-xl' style={{ fontFamily: forumFont.style.fontFamily }} >first time we met</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoveStory