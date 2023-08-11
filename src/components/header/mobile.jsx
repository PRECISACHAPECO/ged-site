import { imagesHeader } from '@/data/imagesHeader'
import { useState, useEffect } from 'react'
import Button from '../Button'

const Mobile = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(
        Math.floor(Math.random() * imagesHeader.length)
    )

    useEffect(() => {
        let currentIndex = currentImageIndex

        const interval = setInterval(() => {
            setCurrentImageIndex(currentIndex)
            currentIndex = (currentIndex + 1) % imagesHeader.length
        }, 4000)

        return () => {
            clearInterval(interval)
        }
    }, [imagesHeader.length])

    useEffect(() => {}, [currentImageIndex])

    return (
        <div>
            <div className="absolute inset-0 z-20 bg-greenLigth opacity-90" />

            {imagesHeader.map((image, index) => (
                <img
                    key={index}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-2000 ${
                        index === currentImageIndex
                            ? 'opacity-100'
                            : 'opacity-0'
                    }`}
                    src={`https://gedagro.com.br/images/site/banners/${image.url}`}
                    alt=""
                />
            ))}

            <div className="w-full h-full absolute inset-0 flex  z-20">
                <div className="w-full flex flex-col gap-10 justify-start items-center px-6 pt-20">
                    <img
                        className="w-[80%]"
                        src="https://gedagro.com.br/images/logoEmail.png"
                        alt=""
                    />
                    <div className="text-center">
                        <p className="text-white text-xl">
                            Software destinado à organização e gestão das Boas
                            Práticas de Fabricação.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-full">
                        <Button
                            title="Fale Conosco"
                            href="#contato"
                            icon={'message'}
                        />
                        <Button
                            title="Acessar o Sistema"
                            href="http://app.gedagro.com.br"
                            icon={'link'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile
