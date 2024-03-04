import { paymentList } from "@/app/utils/dataObject"
import Image from "next/image"
import './payment.scss'

const PaymentMethod = () => {
    return (
        <section className="payment-method container mx-auto  mt-[6rem] mb-4" id="payment-method">
            <h1 className="text-center font-semibold" >Metode Pembayaran Yang Tersedia Untuk Anda</h1>
            <div className="grid grid-cols-5  gap-3 mt-8 p-3">
                {paymentList.map((element, index) => (
                    <Image className="mx-auto my-auto" key={index} src={element} alt="payment method" />
                ))}
            </div>

        </section>
    )
}

export default PaymentMethod