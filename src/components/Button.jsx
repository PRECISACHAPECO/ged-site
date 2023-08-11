import React from 'react'
import IconExternalLink from '../icon/IconExternalLink'
import IconMessage from '../icon/IconMessage'

const Button = ({ title, href, icon }) => {
    return (
        <button className="p-5 text-base bg-yellow-400 text-yellow-950 hover:bg-yellow-500 transition-all rounded-2xl">
            <a href={href} target={href == '#contato' ? '' : '"_blank"'}>
                <div className="flex items-center gap-1">
                    {icon == 'link' ? <IconExternalLink /> : <IconMessage />}
                    {title}
                </div>
            </a>
        </button>
    )
}

export default Button
