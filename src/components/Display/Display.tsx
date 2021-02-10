import React from "react";
import {DisplayType} from "../Counter/Counter";
import style from './Display.module.css'

export function Display(props: DisplayType) {
let styleBlock: string = ((props.data === props.maxValue) ? style.blockAlarm: style.block)
    return (
        <div className={styleBlock} >{props.data}   </div>
    )
}

export default Display