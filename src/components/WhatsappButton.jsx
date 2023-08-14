import { useState } from 'react'
import IconWhatsapp from '../icon/IconWhatsapp'

const WhatsappButton = () => {
    const [showMessage, setShowMessage] = useState(false)

    return (
        <div className="fixed right-4 bottom-4 z-50 animate-bounce">
            <div className="flex items-center gap-1">
                {/* Mensagem */}
                <div
                    className={`${
                        showMessage ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300 bg-yellow-500 p-5 rounded-3xl shadow-md shadow-black/30`}
                >
                    Chamar no Whatsapp
                </div>

                {/* Botão Whatsapp */}
                <div
                    onMouseEnter={() => setShowMessage(true)}
                    onMouseLeave={() => setShowMessage(false)}
                    className="p-5 rounded-full  bg-[#00A884] hover:bg-[#006e56] transition-colors shadow-md shadow-black/30 cursor-pointer"
                >
                    <a
                        href="https://api.whatsapp.com/send?phone=554988159192&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20GEDagro!"
                        target="_blank"
                    >
                        <IconWhatsapp className="text-white text-5xl  " />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WhatsappButton
