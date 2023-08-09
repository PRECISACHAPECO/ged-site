'use client'
import { imagesHeader } from '@/data/imagesHeader'
import { useState, useEffect } from 'react'

const Header = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * imagesHeader.length)
            setCurrentImageIndex(randomIndex)
        }, 500000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div
            className="w-screen h-[85vh] relative"
            // style={{
            //     backgroundImage: `url('https://gedagro.com.br/images/site/banners/${imagesHeader[currentImageIndex].url}')`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'bottom',
            // }}
        >
            <img
                className="w-full h-full object-cover"
                src={`https://gedagro.com.br/images/site/banners/${imagesHeader[currentImageIndex].url}`}
                alt=""
            />
            <div className="w-full h-full absolute inset-0 flex items-center">
                <div className="w-full max-w-md rounded-lg ml-0 md:ml-[120px] flex flex-col gap-6">
                    <img
                        src="https://gedagro.com.br/images/logoEmail.png"
                        alt=""
                    />
                    <div>
                        <p className="text-white text-2xl">
                            Software destinado a organização e gestão das Boas
                            Práticas de Fabricação.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className=" p-5 text-base bg-yellow-400 text-yellow-950  hover:bg-yellow-500 transition-all rounded-2xl">
                            Solicite uma apresentação
                        </button>
                        <button className=" p-5 text-base bg-yellow-400 text-yellow-950  hover:bg-yellow-500 transition-all rounded-2xl">
                            Entre em contato
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
