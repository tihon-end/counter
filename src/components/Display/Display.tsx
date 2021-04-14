import React, {ChangeEvent} from "react";
import style from './Display.module.css'

export type DisplayType = {
    maxValue: number
    data: number


}

export function Display(props: DisplayType) {
    let styleBlock: string = ((props.data === props.maxValue ) ? style.blockAlarm : style.block)
    return (
        <div className={styleBlock} >{props.data} </div>
    )
}

export default Display