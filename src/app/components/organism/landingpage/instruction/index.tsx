'use client'
import { FaRegListAlt } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";
import './instruction.scss'
import Image from "next/image";
import { heroInstruction } from "@/app/image";

const data = [
    {
        icon: <FaRegListAlt size={25} />,
        title: 'Daftar',
        description: 'Masukan akun anda sebagai pengguna yang nanti nya akan menggunakan website kami, gunakan email yang aktif serta password yang kuat'
    },
    {
        icon: <FaFilePen size={25} />,
        title: 'Isi Informasi',
        description: 'Pilih Template sesuai yang anda inginkan, dan    masukan data pernikahan kalian dengan mudah,kemudahan adalah prioritas kami'
    },
    {
        icon: <LuMonitorSmartphone size={25} />,
        title: 'Pantau',
        description: 'Pantau Website pernikahan anda jika ada data yang salah anda dapat mengedit nya sesuai yang anda inginkan '
    },
    {
        icon: <IoShareSocial size={25} />,
        title: 'Bagikan',
        description: 'Anda bisa share Website anda kepada teman atau  keluarga terdekat anda, anda juga bisa membuat  tamu undangan secara ekslusif'

    }

]

const Instruction = () => {

    return (
        <section className="instruction mb-10" id="instruction">
            <div className="p-2">
                <h1 className=" text-2xl lg:text-3xl font-bold" >Langkah Untuk Membuat Undangan</h1>
                <p className="text-sm lg:text-base" >Cukup lakukan 4 langkah untuk buat website undangan digital sendiri. Untuk lebih jelasnya silakan ikuti petunjuk di bawah ini atau lihat video tutorial</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-3">
                <div className=" grid grid-cols-1  lg:grid-rows-2 lg:grid-cols-2 items-center justify-start p-2 gap-4">
                    {data.map((item, index) => (
                        <div className="shadow-lg p-4 md:p-3 lg:p-4 rounded-lg h-full" key={index}>
                            <div className="flex gap-2 items-center ">
                                {item.icon}
                                <h2 className="font-semibold text-lg" >{item.title}</h2>
                            </div>
                            <p className='mt-2 text-sm lg:text-base'> {item.description} </p>
                        </div>
                    ))}

                </div>

                <div className="flex justify-center hidden lg:block">
                    <Image src={heroInstruction} alt="heroInstruction" />
                </div>
            </div>
        </section>
    )
}

export default Instruction