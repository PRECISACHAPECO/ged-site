const Footer = () => {
    return (
        <div className="h-4 w-full flex justify-between items-center mt-24 opacity-60 text-sm ">
            <div>
                © {new Date().getFullYear()}{' '}
                <span className="font-semibold">GEDagro</span>. Todos os
                direitos reservados.
            </div>
            <div>
                Mantido e desenvolvido por{' '}
                <a
                    className="font-semibold"
                    href="https://sisprecisa.com.br/"
                    target="_blank"
                >
                    PRECISA Tecnologia
                </a>
            </div>
        </div>
    )
}

export default Footer
