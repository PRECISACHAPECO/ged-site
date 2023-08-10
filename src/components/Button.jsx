import React from 'react'

const Button = ({ title, href }) => {
    return (
        <button className="p-5 text-base bg-yellow-400 text-yellow-950 hover:bg-yellow-500 transition-all rounded-2xl">
            <a href={href} target={href == '#contato' ? '' : '"_blank"'}>
                {title}
            </a>
        </button>
    )
}

export default Button
