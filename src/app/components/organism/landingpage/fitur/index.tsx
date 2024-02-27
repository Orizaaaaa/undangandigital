import Card from '@/app/components/fragments/card'
import './fitur.scss'
import Image from 'next/image'
import { fiturList } from '@/app/utils/dataObject'

const Fitur = () => {
    return (
        <section className="fitur mt-[6rem] p-3 mb-4" id='fitur'>
            <h1 className=' text-xl  lg:text-3xl font-bold'>Fitur Terbaik Yang Kami Sediakan</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                {fiturList.map((item, index) => (
                    <Card className='px-2 py-4 md:px-4' key={index} >
                        <div className="flex flex-col items-center gap-4 mb-3">
                            <Image src={item.icon} alt='homeFitur' />
                            <h2 className=' text-base sm:text-base lg:text-lg font-semibold' >{item.title}</h2>
                        </div>
                        <p className='text-sm sm:text-base' >
                            {item.desc}
                        </p>
                    </Card>
                ))}

            </div>
        </section>
    )
}

export default Fitur