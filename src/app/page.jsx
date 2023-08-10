'use client'
import Form from '@/components/Formulario/page'
import Header from '@/components/Header'
import Section from '@/components/Section'

export default function Home() {
    return (
        <main>
            <Header />
            <div className="widthDefault">
                <Section
                    src="document.svg"
                    content={
                        <>
                            <p>O nome é a união dos termos GED+agro, onde:</p>
                            <p>
                                <strong>GED</strong> é a sigla para Gestão
                                Eletrônica de Documentos. É um sistema que
                                automatiza o processo de armazenamento,
                                organização, recuperação e distribuição de
                                documentos em formato digital.
                            </p>
                            <p>
                                Já o termo <strong>agro</strong> é um prefixo
                                que significa "campo" ou "terra de cultivo". É
                                usado para formar palavras relacionadas à
                                agricultura, como agronegócio, agropecuária,
                                agroindústria, etc.
                            </p>
                        </>
                    }
                >
                    <h1 className="text-greenLigth text-[40px] font-extrabold">
                        GEDagro
                    </h1>
                    <h1 className="text-greenLigth text-[40px] leading-none font-extrabold">
                        O que é isso?
                    </h1>
                </Section>
                <Section
                    src="document.svg"
                    imageOrder={1}
                    content={
                        <>
                            <p>
                                O GEDagro é uma ferramenta de gestão de
                                informações geradas ao longo de todo o processo
                                produtivo.{' '}
                            </p>
                            <p>
                                A ferramenta oferece uma série de recursos que
                                facilitam a gestão das informações, como:
                            </p>
                            <ul className="list-disc pl-10">
                                <li>
                                    Armazenamento e organização de documentos em
                                    formato digital;
                                </li>
                                <li>
                                    Facilidade de comunicação com fornecedores;
                                </li>
                                <li>Controle de acesso às informações;</li>
                                <li>Auditoria das informações;</li>
                                <li> Geração de relatórios.</li>
                            </ul>
                        </>
                    }
                >
                    <h1 className="text-greenLigth text-[40px] font-extrabold">
                        Pra quer vou usar o GEDagro?
                    </h1>
                </Section>
                <Section
                    src="document.svg"
                    content={
                        <>
                            <p>
                                O GEDagro é uma ferramenta essencial para
                                empresas que desejam garantir a conformidade com
                                as Boas Práticas de Fabricação e a segurança de
                                seus produtos.
                            </p>
                            <ul className="list-disc pl-10">
                                <li>
                                    Melhora da conformidade com as Boas Práticas
                                    de Fabricação;
                                </li>
                                <li>Aumento da eficiência da produção;</li>
                                <li>Redução de custos.</li>
                            </ul>
                        </>
                    }
                >
                    <h1 className="text-greenLigth text-[40px] font-extrabold">
                        É essencial?
                    </h1>
                </Section>
                <Section
                    src="document.svg"
                    imageOrder={1}
                    content={
                        <>
                            <p>
                                Estabeleça um controle de acesso refinado,
                                permitindo o desenvolvimento e preenchimento
                                personalizado de formulários alinhados com as
                                demandas e estrutura hierárquica exclusiva da
                                sua empresa. Assegure a integridade e proteção
                                dos dados por meio de um ambiente que prioriza a
                                precisão e segurança em todas as etapas do
                                processo.
                            </p>
                        </>
                    }
                >
                    <h1 className="text-greenLigth text-[40px] font-extrabold">
                        Personalize seus fluxos de trabalho
                    </h1>
                </Section>
                <Section
                    src="document.svg"
                    content={
                        <>
                            <p>
                                Acesse todas as informações de forma ágil e
                                conveniente, onde quer que esteja, com a
                                praticidade de tê-las literalmente na palma de
                                sua mão. Estruture os dados de acordo com os
                                procedimentos operacionais padrão (POPs) ou crie
                                diretórios personalizados para diferentes tipos
                                de arquivos, permitindo a localização rápida de
                                qualquer item em apenas alguns cliques.
                            </p>
                        </>
                    }
                >
                    <h1 className="text-greenLigth text-[40px] font-extrabold">
                        Consulte a qualquer momento
                    </h1>
                </Section>
                <Section
                    src="document.svg"
                    imageOrder={1}
                    content={
                        <>
                            <p>
                                Diga adeus à preocupação de perder documentos em
                                meio a pastas e arquivos físicos. Centralize
                                toda documentação vital no banco de dados da
                                plataforma, garantindo acesso fácil e rastreável
                                a tudo o que você precisa, consolidado em um
                                único local.
                            </p>
                        </>
                    }
                >
                    <h1 className="text-greenLigth text-[40px] font-extrabold">
                        Faça upload e centralize todos os documentos
                    </h1>
                </Section>
                <Form />
            </div>

            <h1 className="h-[900px]"></h1>
        </main>
    )
}
