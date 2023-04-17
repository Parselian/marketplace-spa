import {LayoutProps} from "@/layout/Layout.props"
import Footer from "@/layout/Footer/Footer"
import Sidebar from "@/layout/Sidebar/Sidebar"
import Header from "@/layout/Header/Header"
import {FunctionComponent} from "react";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
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