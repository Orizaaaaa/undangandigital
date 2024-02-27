import { paymentList } from "@/app/utils/dataObject"
import Image from "next/image"
import './payment.scss'

const PaymentMethod = () => {
    return (
        <section className="payment-method mt-[6rem] mb-4" id="payment-method">
            <h1 className="text-center font-semibold" >Metode Pembayaran Yang Tersedia Untuk Anda</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
                {paymentList.map((element, index) => (
                    <Image key={index} src={element} alt="payment method" />
                ))}
            </div>

        </section>
    )
}

export default PaymentMethod