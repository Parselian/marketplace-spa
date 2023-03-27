import {ReactNode} from "react";

export interface ButtonProps {
    type: 'normal' | 'transparent',
    hasIcon: true | false,
    children: ReactNode
}