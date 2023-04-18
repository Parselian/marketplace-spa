import {SidebarProps} from "@/layout/Sidebar/Sidebar.props"
import s from "./Sidebar.module.css"
import Logo from "../../../public/logo.svg"
import cn from "classnames"

const Sidebar = ({className, ...props}:SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, s.sidebar)} {...props}>
            <Logo/>
            Sidebar
        </div>
    )
}

export default Sidebar