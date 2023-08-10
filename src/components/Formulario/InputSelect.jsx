import React from 'react'
import states from '@/data/states'

const InputSelect = ({ register, errors, label, name, required, data }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1">
                <label htmlFor={name} className="font-bold">
                    {label}{' '}
                    {required && <span className="text-red-500">*</span>}
                </label>
                <select
                    defaultValue={states[23].value}
                    className="bg-[#f8f8f8] border border-black/10 p-3 outline-none rounded-lg w-full"
                    id={name}
                    {...register(name, {
                        required,
                    })}
                >
                    <option value="">Selecione...</option>
                    {data.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {errors[name] && (
                <div className="text-red-500 text-xs pt-1">
                    {required && errors[name] ? 'Campo obrigatório' : null}
                </div>
            )}
        </div>
    )
}

export default InputSelect
