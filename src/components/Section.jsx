'use client'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const Section = ({ imageOrder, children, content, src }) => {
    const [isMobile, setIsMobile] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const translateX =
        imageOrder === 1 ? 'translateX(-100%)' : 'translateX(100%)'

    const animationConfig = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translatex(0%)' : translateX,
        config: {
            duration: inView ? 400 : 600,
        },
    })

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 768)
            window.addEventListener('resize', updateIsMobile)
            return () => {
                window.removeEventListener('resize', updateIsMobile)
            }
        }
    }, [])

    return (
        <section className="flex flex-col md:flex-row items-center gap-10 pt-5 md:pt-24 w-full">
            <animated.div
                ref={ref}
                style={!isMobile ? animationConfig : null}
                className={`${
                    imageOrder === 1 ? 'order-1 md:order-2' : 'order-2'
                } flex flex-col w-full`}
            >
                <div>{children}</div>
                <div className="border border-greenLigth w-[50%] mt-10" />
                <div className="pt-4 flex flex-col gap-2 text-lg">
                    {content}
                </div>
            </animated.div>
            <div
                className={`w-full ${
                    imageOrder === 1
                        ? 'order-1 md:order-2'
                        : 'order-2 md:order-1'
                }`}
            >
                <img src={src} alt="" />
            </div>
        </section>
    )
}

export default Section
