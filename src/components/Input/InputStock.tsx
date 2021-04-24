import React, {ChangeEvent} from "react";

import {TextField} from "@material-ui/core";




export type InputType = {
    value: number
    setting: (event: ChangeEvent<HTMLInputElement>) => void
label: string
    variant: string
    name: string



}


function InputStock(props: InputType) {
    // let setValue = (event: ChangeEvent<HTMLInputElement>) => {
    //     let value = Number(event.currentTarget.value)
    //    props.setValue(value)

    // }



    return (
        <div>
            <TextField
name={props.name}
                style={{color: 'red'}}

                size={'small'}  variant={"outlined"} label={props.label} margin={'normal'}
                        type='number' value={props.value}
                       onChange={props.setting}  />

        </div>

    )
}


export default InputStock