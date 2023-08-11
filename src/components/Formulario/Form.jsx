import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Select from './InputSelect'
import states from '@/data/states'
import InputTextArea from './InputTextArea'
import ButtonForm from './ButtonForm'
import Toast from '../Toast'
import emailjs from 'emailjs-com'

const Form = () => {
    const [isSending, setIsSending] = useState(false)
    const [toastData, setToastData] = useState(null)

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const values = {
            nome: data.nome,
            email: data.email,
            empresa: data.empresa != '' ? data.empresa : 'Não informado',
            telefone: data.telefone != '' ? data.telefone : 'Não informado',
            cidade:
                data.cidade != ''
                    ? `${data.cidade}/${data.estado}`
                    : data.estado,
            mensagem: data.mensagem,
        }
        console.log('🚀 ~ values:', values)

        // Enviar email com os dados do formulário com emailJS e resetar o formulário
        setIsSending(true)
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                values,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then((result) => {
                reset()

                setTimeout(() => {
                    setIsSending(false)
                    setToastData({
                        status: true,
                        message: 'Sua mensagem foi enviada com sucesso!',
                    })
                    setTimeout(() => {
                        setToastData(null)
                    }, 2000)
                }, 2000)
            })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full border border-black/10 shadow-xl p-4 md:p-8 rounded-xl"
            >
                <div>
                    <h1 className="text-3xl font-semibold">Contato</h1>
                </div>
                <div className="pt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <Input
                            register={register}
                            errors={errors}
                            label="Nome"
                            name="nome"
                            required
                        />
                        <Input
                            register={register}
                            errors={errors}
                            label="Email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Input
                            register={register}
                            errors={errors}
                            label="Empresa"
                            name="empresa"
                        />
                        <Input
                            register={register}
                            errors={errors}
                            label="Telefone"
                            name="telefone"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Input
                            register={register}
                            errors={errors}
                            label="Cidade"
                            name="cidade"
                        />
                        <Select
                            register={register}
                            errors={errors}
                            label="Estado"
                            name="estado"
                            data={states}
                        />
                    </div>
                    <div>
                        <InputTextArea
                            register={register}
                            errors={errors}
                            label="Mensagem"
                            required
                            name="mensagem"
                        />
                    </div>
                    <div className="mt-2 md:mt-4">
                        <ButtonForm
                            isSending={isSending}
                            label={isSending ? 'Enviando...' : 'Enviar'}
                        />
                    </div>
                </div>
            </form>
            <Toast data={toastData} />
        </>
    )
}

export default Form
