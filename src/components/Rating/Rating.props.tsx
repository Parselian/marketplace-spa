import {DetailedHTMLProps, HTMLAttributes} from "react"

export default interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDisabled?: boolean,
    current: number,
    onUpdate?: (current: number) => void
}
