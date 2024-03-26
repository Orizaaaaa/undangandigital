import { forumFont, playballFont } from '@/app/utils/font'
import './index.scss'
const Messages = () => {
    return (
        <section className="messages px-3 py-24">
            <div className="flex flex-col justify-center  p-4 rounded-tr-3xl  shadow-[0_0_10px_0_rgba(0,0,0,0.5)] ">
                <h1 className='text-3xl text-center' style={{ fontFamily: playballFont.style.fontFamily }} >Ucapan & Doa</h1>
                <p className='text-xl mt-20' style={{ fontFamily: forumFont.style.fontFamily }} >semoga doa yang kalian berikan kepada kami, berlaku juga untuk kalian </p>
                <h2 className='my-3' style={{ fontFamily: forumFont.style.fontFamily }}>Kirim Ucapan: </h2>
                <form action="">
                    <p>babi</p>
                </form>
            </div>

        </section>
    )
}

export default Messages