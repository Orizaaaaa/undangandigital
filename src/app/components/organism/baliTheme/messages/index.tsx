import { playballFont } from '@/app/utils/font'
import './index.scss'
const Messages = () => {
    return (
        <section className="messages">
            <div className="flex flex-col justify-center items-center p-3 shadow-black">
                <h1 className='text-3xl' style={{ fontFamily: playballFont.style.fontFamily }} >Ucapan & Doa</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam in sunt iusto architecto suscipit corrupti aspernatur minima, ab velit labore vero autem. Recusandae, aut. Cupiditate laborum magnam ipsam eos?</p>
            </div>
        </section>
    )
}

export default Messages