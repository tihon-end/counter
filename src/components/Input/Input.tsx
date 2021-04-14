import {ChangeEvent} from "react";
import style from './Input.module.css'

export type InputType = {
    value: number
    setting: (event: ChangeEvent<HTMLInputElement>) => void

}


function Input(props: InputType) {
    // let setValue = (event: ChangeEvent<HTMLInputElement>) => {
    //     let value = Number(event.currentTarget.value)
    //    props.setValue(value)

    // }

    return (
        <div>
            <input className={style.inp} type='number' value={props.value} onChange={props.setting}  />

        </div>

    )
}


export default Input