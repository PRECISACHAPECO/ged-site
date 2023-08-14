import React from 'react'
import Form from './Form'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const Page = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const animationConfig = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0%)' : 'translateY(40%)',
    })

    return (
        <animated.section
            ref={ref}
            style={animationConfig}
            className="pt-20 flex  flex-col lg:flex-row items-center gap-10"
            id="contato"
        >
            <div className="w-full text-center leading-tight">
                <h1 className=" text-[50px] font-extrabold">Se Interessou</h1>
                <h1 className=" text-[50px] font-extrabold">
                    pela <span className="text-greenLigth ">plataforma</span>?
                </h1>
                <h1 className=" text-[50px] font-extrabold">Fale Conosco!</h1>
            </div>
            <Form />
        </animated.section>
    )
}

export default Page
