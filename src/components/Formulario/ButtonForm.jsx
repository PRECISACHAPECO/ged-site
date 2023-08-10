import IconSend from '@/icon/IconSend'
import React from 'react'

const ButtonForm = ({ label, isSending }) => {
    return (
        <button
            type="submit"
            disabled={isSending}
            className="bg-greenLigth w-full rounded-lg p-4 text-white flex gap-2 justify-center items-center hover:bg-greenDark hover:-translate-y-2 transition-all duration-300"
        >
            {label}
            <IconSend className="text-xl" />
        </button>
    )
}

export default ButtonForm
