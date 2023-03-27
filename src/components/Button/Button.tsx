import React from 'react'
import {ButtonProps} from "@/components/Button/Button.props"
import classes from "@/components/Button/Button.module.css"
import cn from "classnames"



const Button = ({type, hasIcon, children}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(classes.button, [
            {[`${classes['button-normal']}`]: type === 'normal'},
            {[`${classes['button-transparent']}`]: type === 'transparent'}
        ])}>
            {children}
        </button>
    )
}

export default Button