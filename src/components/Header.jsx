'use client'
import { imagesHeader } from '@/data/imagesHeader'
import { useState, useEffect } from 'react'
import Button from './Button'

const Header = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * imagesHeader.length)
            setCurrentImageIndex(randomIndex)
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="w-screen h-screen overflow-hidden relative">
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(-60deg, transparent 0%, transparent 60%, green 60%, green 100%)',
                }}
            />

            <img
                className="w-full h-full object-cover"
                src={`https://gedagro.com.br/images/site/banners/${imagesHeader[currentImageIndex].url}`}
                alt=""
            />
            <div className="w-full h-full absolute inset-0 flex items-center z-20">
                <div className="w-full max-w-md rounded-lg ml-0 md:ml-[120px] pb-[200px] flex flex-col gap-6">
                    <img
                        src="https://gedagro.com.br/images/logoEmail.png"
                        alt=""
                    />
                    <div>
                        <p className="text-white text-2xl">
                            Software destinado à organização e gestão das Boas
                            Práticas de Fabricação.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button title="Solicite uma apresentação" />
                        <Button title="Acessar o sistema" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
