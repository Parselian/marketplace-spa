import {LayoutProps} from "@/layout/Layout.props"
import Footer from "@/layout/Footer/Footer"
import Sidebar from "@/layout/Sidebar/Sidebar"
import Header from "@/layout/Header/Header"
import {FunctionComponent} from "react"
import s from "./Layout.module.css"

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={s.layout}>
            <Header className={s.header}/>
            <Sidebar className={s.sidebar}/>
            <div className={s.main}>
                {children}
            </div>
            <Footer className={s.footer}/>
        </div>
    )
}

const withLayout = <T extends Record<string, unknown>>(Component): FunctionComponent<T> => {
    return function WithLayoutComponent (props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}

export default withLayout