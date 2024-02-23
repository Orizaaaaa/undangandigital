import React, { ReactNode } from 'react'
import './button.scss'
type Props = {
    className?: string
    children: ReactNode
    type?: string
    onClick?: () => void
}

const ButtonSecondary = ({ className, children, onClick }: Props) => {
    return (
        <button className={`button-secondary ${className}`} onClick={onClick} >
            {children}
        </button>
    )
}

export default ButtonSecondary