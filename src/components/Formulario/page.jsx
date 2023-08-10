import React from 'react'
import Form from './Form'

const Page = () => {
    return (
        <section className="pt-20 flex items-center gap-10">
            <div className="w-full">
                <h1 className=" text-[40px] font-extrabold">Se Interessou</h1>
                <h1 className=" text-[40px] font-extrabold">
                    pela <span className="text-greenLigth ">plataforma</span>?
                </h1>
                <h1 className=" text-[40px] font-extrabold">Fale Conosco!</h1>
            </div>
            <Form />
        </section>
    )
}

export default Page
