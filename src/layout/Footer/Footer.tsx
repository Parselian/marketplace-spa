import {FooterProps} from "@/layout/Footer/Footer.props"
import Link from "next/link"
import s from "./Footer.module.css"
import cn from "classnames"
import {format} from "date-fns"

const Footer = ({className, ...props}:FooterProps):JSX.Element => {
    return (
        <footer className={cn(className, s.footer)} {...props}>
            <div className={s.copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <div className={s.links}>
                <Link className={s.link} href='/'>Пользовательское соглашение</Link>
                <Link className={s.link} href='/'>Политика конфиденциальности</Link>
            </div>
        </footer>
    )
}

export default Footer