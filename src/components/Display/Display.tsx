import React from "react";
import style from './Display.module.css'

export type DisplayType = {
    maxValue: number
    count: number
    error: boolean

}

export function Display(props: DisplayType) {
 let styleBlock: string = ((props.count === props.maxValue ) ? style.blockAlarm : style.block)
    return (
        <div className={styleBlock}>{props.count} </div>
    )
}

export default Display