import Card from '@/app/components/fragments/card'
import './theme.scss'
import Image from 'next/image'
import { example } from '@/app/image'
import { FaStar } from "react-icons/fa";
import { themeList } from '@/app/utils/dataObject';
import ButtonPrimary from '@/app/components/elements/buttonPrimary/Button';



const Theme = () => {


    const filtering = (type: string) => {
        if (type === 'Free') {
            return 'freeStyle'
        } else if (type === 'Premium') {
            return 'premiumStyle'
        } else {
            return 'luxuryStyle'
        }
    }



    return (
        <section className="theme mb-4" id='theme'>
            <h1 className=' title text-center text-xl  lg:text-3xl font-bold my-10' >Pilihan Tema Undangan Digital Kami </h1>
            <div className="grid px-3 grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {themeList.map((item, index) => (
                    <Card key={index} >
                        <div className="card-wrapper relative">
                            <Image alt='example' src={item.image} className='w-full rounded-t-md' />
                            <div className='flex justify-end mt-3'>
                                <div className={`${filtering(item.type)} font-medium rounded-l-lg px-8 py-1`}>{item.type}</div>
                            </div>
                            <h1 className='font-semibold px-3 text-xl font-semibold'>{item.title}</h1>
                            <div className="flex">
                                <div className="star flex items-center px-3 mb-5">
                                    {Array.from({ length: item.star }).map((_, index) => (
                                        <FaStar key={index} className='text-amber-400' size={20} />
                                    ))}
                                </div>
                                <p>({item.user})</p>
                            </div>
                        </div>
                    </Card>
                ))}

            </div>
            <div className="flex justify-center align-center mt-10">
                <ButtonPrimary className='py-3 px-5 rounded-xl' >
                    Lihat Semua Tema
                </ButtonPrimary>
            </div>
        </section>
    )
}

export default Theme