import React from 'react'

const Section = ({ imageOrder, children, content, src }) => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 pt-5 md:pt-24 w-full">
            <div
                className={`${
                    imageOrder === 1 ? 'order-1 md:order-2' : 'order-2'
                } flex flex-col w-full`}
            >
                <div>{children}</div>
                <div className="border border-greenLigth w-[50%] mt-10" />
                <div className="pt-4 flex flex-col gap-2 text-lg">
                    {content}
                </div>
            </div>
            <div
                className={`w-full ${
                    imageOrder === 1
                        ? 'order-1 md:order-2'
                        : 'order-2 md:order-1'
                }`}
            >
                <img src={src} alt="" />
            </div>
        </section>
    )
}

export default Section
