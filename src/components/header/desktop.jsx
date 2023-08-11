import { imagesHeader } from '@/data/imagesHeader'
import { useState, useEffect } from 'react'
import Button from '../Button'

const Desktop = () => {
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
            <div
                className="absolute inset-0 z-20"
                style={{
                    background:
                        'linear-gradient(-60deg, transparent 0%, transparent 60%, #4A8B57 60%, #4A8B57 100%)',
                }}
            />

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

            <div className="w-full h-full absolute inset-0 flex items-center z-20">
                <div className="w-full max-w-md rounded-lg ml-0 md:ml-[50px] pb-[200px] flex flex-col gap-6">
                    <img
                        className="w-[90%]"
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

export default Desktop
