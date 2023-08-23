import React, { useState, useEffect } from 'react'

const ScrollButton = () => {
    const [isScrolling, setIsScrolling] = useState(true)

    const handleScroll = () => {
        setIsScrolling(window.scrollY < 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className="absolute top-[90vh] left-1/2 transform -translate-x-1/2"
            style={{ display: isScrolling ? 'block' : 'none' }}
        >
            <div className="border-2 border-white w-[30px] h-[57px] rounded-xl">
                <div
                    className={`scroll-icon mx-auto mt-3 ${
                        isScrolling ? 'animate-bounce' : ''
                    }`}
                />
            </div>
        </div>
    )
}

export default ScrollButton
