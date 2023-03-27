import React from "react"
import classes from "@/components/PComp/PComp.module.css"
import PCompProps from "@/components/PComp/PComp.props"
import cn from "classnames"

const PComp = ({children, size = 'm', ...props}: PCompProps): JSX.Element => {
    const styles = cn(classes.p, {
        [classes.s]: size === 's',
        [classes.m]: size === 'm',
        [classes.l]: size === 'l'
    })
    return <p className={styles}>{children}</p>
}

export default PComp