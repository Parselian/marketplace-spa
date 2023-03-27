import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react"

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    type: 'inactive' | 'ghost' | 'sale' | 'alert' | 'normal'
    size?: 's' | 'm',
    children: ReactNode,
    href?: string,
}