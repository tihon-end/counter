import React from "react";
import {BtnType} from "../Counter/Counter";
import style from './Btn.module.css'

export function Btn(props: BtnType) {

    return (
        <button className={style.btn} onClick={() => {props.onClickHe()}} disabled={props.isDisabled}>{props.title}  </button>
    )
}