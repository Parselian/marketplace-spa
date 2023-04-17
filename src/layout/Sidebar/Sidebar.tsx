import {SidebarProps} from "@/layout/Sidebar/Sidebar.props"

const Sidebar = ({...props}:SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}

export default Sidebar