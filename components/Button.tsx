'use client'
import React from 'react'

const Button = () => {
    function ButtonClick() {
        console.log
    }
    return (
        <div>
            <button onClick={ButtonClick} > click here</button>
        </div>
    )
}

export default Button