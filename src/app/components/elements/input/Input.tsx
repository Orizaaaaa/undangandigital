import { forumFont } from '@/app/utils/font'
import React from 'react'

type Props = {
    htmlFor: string
    title?: string
    type?: string
    onChange: any
    value: number | string
    placeholder?: string,
    className?: string

}

const Input = ({ htmlFor, onChange, value, placeholder, className, type = 'text' }: Props) => {
    return (
        <div className="input mb-3">

            <label htmlFor={htmlFor}></label>

            <input style={{ fontFamily: forumFont.style.fontFamily }} type={type} name={htmlFor} id={htmlFor} onChange={onChange} value={value}
                className={`p-3 bg-[#523E27] rounded-xl w-full placeholder:text-[#f1ebd1] focus:outline-none text-[#f1ebd1] ${className}`}
                placeholder={placeholder} />
        </div>
    )
}
export default Input