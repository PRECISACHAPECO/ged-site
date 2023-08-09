import React from 'react'

const Button = ({ title }) => {
    return (
        <button className="p-5 text-base bg-yellow-400 text-yellow-950 hover:bg-yellow-500 transition-all rounded-2xl">
            {title}
        </button>
    )
}

export default Button
