import React from 'react'
import Form from './Form'

const Page = () => {
    return (
        <section className="pt-20 flex items-center gap-10" id="contato">
            <div className="w-full">
                <h1 className=" text-[50px] font-extrabold">Se Interessou</h1>
                <h1 className=" text-[50px] font-extrabold">
                    pela <span className="text-greenLigth ">plataforma</span>?
                </h1>
                <h1 className=" text-[50px] font-extrabold">Fale Conosco!</h1>
            </div>
            <Form />
        </section>
    )
}

export default Page
