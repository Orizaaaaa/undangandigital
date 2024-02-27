import Card from '@/app/components/fragments/card'
import './fitur.scss'
import Image from 'next/image'
import { homeFitur } from '@/app/image'
import { fiturList } from '@/app/utils/dataObject'

const Fitur = () => {
    return (
        <section className="fitur mt-[6rem] mb-4" id='fitur'>
            <h1 className='font-bold text-3xl'>Fitur Terbaik Yang Kami Sediakan</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                {fiturList.map((item, index) => (
                    <Card className='p-4' key={index} >
                        <div className="flex items-center gap-4 mb-3">
                            <Image src={item.icon} alt='homeFitur' />
                            <h2 className='text-lg font-semibold' >{item.title}</h2>
                        </div>
                        <p>
                            {item.desc}
                        </p>
                    </Card>
                ))}

            </div>
        </section>
    )
}

export default Fitur