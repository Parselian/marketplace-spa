import TagProps from "@/components/Tag/Tag.props"
import classes from "@/components/Tag/Tag.module.css"
import cn from "classnames"

const Tag = ({type, size = 's', href = null, children, ...props}: TagProps): JSX.Element => {
    const styles = cn(classes.tag, [
        {[classes.inactive]: type === 'inactive'},
        {[classes.ghost]: type === 'ghost'},
        {[classes.sale]: type === 'sale'},
        {[classes.alert]: type === 'alert'},
        {[classes.normal]: type === 'normal'},
        {[classes.small]: size === 's'},
        {[classes.medium]: size === 'm'}
    ])
    return (
        <div className={styles}>
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}

export default Tag