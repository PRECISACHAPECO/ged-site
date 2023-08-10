import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Select from './InputSelect'
import states from '@/data/states'
import InputTextArea from './InputTextArea'
import ButtonForm from './ButtonForm'

const Form = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full shadow-xl p-6 rounded-xl"
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
                        required
                    />
                    <Input
                        register={register}
                        errors={errors}
                        label="Telefone"
                        name="telefone"
                        required
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Input
                        register={register}
                        errors={errors}
                        label="Cidade"
                        name="cidade"
                        required
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
                        name="mensagem"
                    />
                </div>
                <ButtonForm />
            </div>
        </form>
    )
}

export default Form
