import {HeaderProps} from "@/layout/Header/Header.props"

const Header = ({...props}:HeaderProps):JSX.Element => {
    return (
        <header {...props}>
            Header
        </header>
    )
}

export default Header