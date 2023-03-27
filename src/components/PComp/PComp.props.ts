import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react"

export default interface PCompProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l',
    children: ReactNode
}