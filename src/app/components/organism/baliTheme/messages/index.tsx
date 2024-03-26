'use client'
import { forumFont, playballFont } from '@/app/utils/font'
import './index.scss'
import Input from '@/app/components/elements/input/Input'
import { useState } from 'react'
const Messages = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        location: '',
        message: ''
    })

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <section className="messages px-3 py-32">
                <div className="flex flex-col justify-center  p-4 rounded-tr-3xl  shadow-[0_0_10px_0_rgba(0,0,0,0.5)] ">
                    <h1 className='text-3xl text-center' style={{ fontFamily: playballFont.style.fontFamily }} >Ucapan & Doa</h1>
                    <p className='text-xl mt-20' style={{ fontFamily: forumFont.style.fontFamily }} >Semoga doa yang kalian berikan kepada kami, berlaku juga untuk kalian </p>
                    <h2 className='my-3' style={{ fontFamily: forumFont.style.fontFamily }}>Kirim Ucapan: </h2>

                    {/* form data */}
                    <form action="">
                        <Input placeholder='Nama Lengkap' htmlFor='fullName' value={formData.fullName} onChange={handleChange} />
                        <Input placeholder='Alamat' htmlFor='location' value={formData.location} onChange={handleChange} />
                        <div className="w-full">
                            <textarea style={{ fontFamily: forumFont.style.fontFamily }} className="w-full bg-[#523E27] h-32 px-3 py-2
                        border rounded-lg placeholder:text-[#f1ebd1] 
                        focus:outline-none text-[#f1ebd1] "
                                placeholder="contoh: Selamat untuk acara nya"
                                onChange={handleChange} name="message" value={formData.message} >
                            </textarea>
                        </div>

                        {/* send data */}
                        <button style={{ fontFamily: forumFont.style.fontFamily }} className='w-full mt-4 text-lg font-semibold rounded-full px-4 py-2 border-2 border-[#523E27] text-[#523E27]' >
                            kirim sekarang
                        </button>
                    </form>
                </div>
            </section>

            <section className='footer h-40 bg-[#523E27] flex justify-center'>
                <span className="relative bottom-14 bg-[#523E27] w-[70%] h-52 rounded-full">

                </span>
            </section>
        </>
    )
}

export default Messages