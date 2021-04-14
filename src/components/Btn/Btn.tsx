import React from "react";
import style from './Btn.module.css'


export type BtnType = {
    onClickHe: () => void
    title: string
    isDisabled: boolean

}

export function Btn(props: BtnType) {

    return (
        <button className={style.btn} onClick={() => {props.onClickHe()}}
                disabled={props.isDisabled}
        >{props.title}  </button>
    )
}