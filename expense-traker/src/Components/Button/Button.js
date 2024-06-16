import React from 'react'
import '../../App.css'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <button className='ButtonStyled'
        style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }}
        onClick={onClick}>
            {icon}
            {name}
        </button>
    )
}


export default Button;