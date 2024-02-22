import React, { ReactNode } from 'react'
import './button.scss'
type Props = {
    className?: string
    children: ReactNode
    type?: string
    onClick?: () => void
}

const ButtonPrimary = ({ className, children, onClick }: Props) => {
    return (
        <button className={`button-primary border-0 ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonPrimary