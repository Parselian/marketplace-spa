import React from 'react'
import {ButtonProps} from "@/components/Button/Button.props"
import classes from "@/components/Button/Button.module.css"
import cn from "classnames"

import Arrow from "./arrow.svg"


const Button = ({type, className, arrow = 'none', children, ...props}: ButtonProps): JSX.Element => {
    const btnStyles = cn(classes.button, className, [
        {[`${classes['button-normal']}`]: type === 'normal'},
        {[`${classes['button-transparent']}`]: type === 'transparent'}
    ])
    const arrowStyles = cn({
        [classes.down]: arrow === 'down'
    })

    return (
        <button className={btnStyles}>
            {children}
            {arrow !== 'none' && <Arrow className={arrowStyles}/>}
        </button>
    )
}

export default Button