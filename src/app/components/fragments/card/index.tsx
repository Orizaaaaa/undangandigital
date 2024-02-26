import React from 'react'



const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`shadow-lg bg-white rounded-md ${className}`} >{children}</div>
    )
}

export default Card