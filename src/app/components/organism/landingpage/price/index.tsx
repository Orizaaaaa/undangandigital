import ButtonPrimary from '@/app/components/elements/buttonPrimary/Button';
import './price.scss'
import { FaCheck } from "react-icons/fa6";
import { priceList } from '@/app/utils/dataObject';


const Price = () => {
    return (
        <section className="price mt-[6rem] mb-4" id="price">
            <div className="p-3">
                <h1 className='text-xl  lg:text-3xl font-bold' >Harga terbaik untuk anda</h1>
                <p className='subtitle' >kamu adalah segalanya, untuk kamu harga terbaik dengan jaminan website yang berkualitas</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 p-3 lg:p-0">
                {priceList.map((item, index) => (
                    <div className="card flex flex-col justify-between border-2 text-neutral-900 rounded-lg p-4 w-full md:w-80 mx-auto" key={index}>
                        <div className="wrapper">
                            <h1 className='mb-3 font-semibold'>{item.type}</h1>
                            <h2 className='font-semibold text-3xl' >{item.price}</h2>
                            <div className="list-fitur mt-5">
                                {item.fitur.map((fitur, index) => (
                                    <div className="flex gap-2 items-center mb-4" key={index}>
                                        <FaCheck className='text-lime-600' />
                                        <p>{fitur.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex button-wrapper ">
                            <ButtonPrimary className='w-full py-3 rounded-full ' >
                                Get Started
                            </ButtonPrimary>
                        </div>

                    </div>
                ))}


            </div>

        </section>
    )
}

export default Price