import Image from "next/image"


const PaymentMethod = () => {
    return (
        <section className="payment-method mt-[6rem]" id="payment-method">
            <h1 className="text-center font-semibold" >Metode Pembayaran Yang Tersedia Untuk Anda</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
                {/* <Image src={} /> */}
            </div>
        </section>
    )
}

export default PaymentMethod