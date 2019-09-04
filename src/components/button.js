import React from 'react'

// no updates necessary

const Button = props => (
    <div className={props.divClassName}>
        <button onClick={props.onClick} className={props.buttonClassName} id={props.id}>{props.text}</button>
    </div>
)

export default Button