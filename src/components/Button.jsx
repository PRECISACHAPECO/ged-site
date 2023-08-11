import React from 'react'
import IconExternalLink from '../icon/IconExternalLink'
import IconMessage from '../icon/IconMessage'

const Button = ({ title, href, icon }) => {
    return (
        <a
            href={href}
            target={href == '#contato' ? '' : '"_blank"'}
            className="p-5 text-base bg-yellow-400 text-yellow-950 hover:bg-yellow-500 transition-all rounded-2xl w-full"
        >
            <div className="flex items-center gap-1 justify-center">
                {icon == 'link' ? <IconExternalLink /> : <IconMessage />}
                {title}
            </div>
        </a>
    )
}

export default Button
