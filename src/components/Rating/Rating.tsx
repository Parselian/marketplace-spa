'use client'

import React, {useEffect, useState, KeyboardEvent} from "react"
import RatingProps from "./Rating.props"
import styles from "./Rating.module.css"
import cn from "classnames"

import Star from "./star.svg"

const Rating = ({isDisabled = true, current, onUpdate, ...props}: RatingProps): JSX.Element => {
    const [rating, setRating] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        updRating(current)
    }, [current])

    const updRating = (currentRating: number) => {
        const newRating = rating.map((star: JSX.Element, i: number) => (
            <span className={cn(styles.star, [{[styles['active']]: i < currentRating}])}
                  onMouseEnter={() => onHoverUpd(i + 1)}
                  onMouseLeave={() => onHoverUpd(current)}>
                <Star
                    onClick={() => handleClick(i + 1)}
                    onKeyDown={(e:KeyboardEvent<SVGAElement>) => handleKey(e, i + 1)}
                    tabIndex={!isDisabled ? 0 : -1}
                />
            </span>
        ))
        setRating(newRating)
    }

    const onHoverUpd = (i: number) => {
        if (!isDisabled) updRating(i)
    }

    const handleClick = (i: number) => {
        if (!isDisabled && onUpdate) onUpdate(i)
    }

    const handleKey = (e: KeyboardEvent<SVGAElement>, i: number) => {
        if (!isDisabled && onUpdate && e.code === 'Enter') onUpdate(i)
    }

    return (
        <div className={styles.rating} {...props}>
            {
                rating.map((star, i) => {
                    return (
                        <span key={i}>
                            {star}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Rating