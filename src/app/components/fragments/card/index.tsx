import React from 'react'



const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='shadow-lg p-4 bg-white rounded-md' >{children}</div>
    )
}

export default Card