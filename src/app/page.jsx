import Header from '@/components/Header'

export default function Home() {
    return (
        <main>
            <Header />
            <section className="widthDefault flex items-center gap-10 pt-24 w-full">
                <div className="flex flex-col w-full">
                    <div>
                        <h1 className="text-greenLigth text-[60px] font-extrabold">
                            BPF?
                        </h1>
                        <h1 className="text-greenLigth text-[60px] leading-5 font-extrabold">
                            O que é isso?
                        </h1>
                    </div>
                    <div className="border border-greenLigth w-[50%] mt-10"></div>
                    <div className="pt-4 flex flex-col gap-2 text-base">
                        <p>
                            A sigla BPF significa Boas Práticas de Fabricação e
                            elas são exigidas em todas as indústrias de produtos
                            para alimentação animal e podem ser aplicada em
                            diversos setores. São um conjunto de diretrizes que
                            descrevem e exigem etapas da cadeia produtiva, com o
                            intuito de garantir a qualidade e a segurança dos
                            processos e produtos.
                        </p>
                        <p>
                            As BPFs estão relacionadas à adoção de um conjunto
                            de procedimentos e controles operacionais que, até
                            então, eram exigidos em papel, o que geravam
                            quantidades enormes de documentos diariamente. Mas
                            isso mudou e fica a pergunta:
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <img src="next.svg" alt="" />
                </div>
            </section>
            <div className="widthDefault pt-12">
                <h1 className="text-greenLigth text-[50px] font-bold text-center">
                    Sua rotina seria MUITO mais fácil se...
                </h1>
            </div>

            <h1 className="h-[900px]"></h1>
        </main>
    )
}
