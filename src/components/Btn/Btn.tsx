import React from "react";
import style from './Btn.module.css'
import {Button} from "@material-ui/core";


export type BtnType = {
    onClickHe: () => void
    title: string
    isDisabled: boolean
}

export function Btn(props: BtnType) {

    return (
        <Button color={'primary'} variant={"outlined"} size={"small"} className={style.btn} onClick={() => {props.onClickHe()}}
                disabled={props.isDisabled}
        >{props.title}  </Button>
    )
}