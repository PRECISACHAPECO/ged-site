'use client'
import React, { useState, useEffect } from 'react'
import Desktop from './desktop'
import Mobile from './mobile'

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    useEffect(() => {
        window.addEventListener('resize', updateIsMobile)
        return () => {
            window.removeEventListener('resize', updateIsMobile)
        }
    }, [])

    return (
        <div className="w-screen h-screen overflow-hidden relative">
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    )
}

export default Header
