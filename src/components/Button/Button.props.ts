import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react"

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    type: 'normal' | 'transparent',
    hasIcon: true | false,
    children: ReactNode,
    arrow?: 'right' | 'down' | 'none'
}