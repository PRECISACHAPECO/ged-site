import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Select from './InputSelect'
import states from '@/data/states'
import InputTextArea from './InputTextArea'
import ButtonForm from './ButtonForm'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Toast from '../Toast'

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
        setIsSending(true)

        setTimeout(() => {
            setIsSending(false)
            reset()
            setToastData({
                status: 'true',
                message: 'Mensagem enviada com sucesso!',
            })
            setTimeout(() => {
                setToastData(null)
            }, 2000)
        }, 2000)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full border border-black/10 shadow-xl p-8 rounded-xl"
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
                    <div className="flex items-center gap-4">
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
                    <div className="flex items-center gap-4">
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
                    <div className="mt-4">
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
