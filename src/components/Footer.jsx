const Footer = () => {
    return (
        <div className="h-4 w-full flex flex-col gap-1 md:gap-0 md:flex-row justify-between items-center mt-24 opacity-60 text-sm ">
            <div>
                © {new Date().getFullYear()}{' '}
                <span className="font-semibold">GEDagro</span>. Todos os
                direitos reservados.
            </div>
            <div>
                Desenvolvido e mantido por{' '}
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
