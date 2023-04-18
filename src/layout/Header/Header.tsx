import {HeaderProps} from "@/layout/Header/Header.props"
import s from "./Header.module.css"
import Logo from "../../../public/logo.svg"
import cn from "classnames"

const Header = ({className, ...props}:HeaderProps):JSX.Element => {
    return (
        <header className={cn(className, s.header)} {...props}>
            <Logo/>
        </header>
    )
}

export default Header