import React, {useState} from "react";
import {Display} from "../Display/Display";
import {Btn} from "../Btn/Btn";
import style from './Counter.module.css'

export type DisplayType={
    maxValue: number
    data: number
}

export type BtnType={
    onClickHe: ()=>void
    title: string
    isDisabled: boolean
}


function Counter() {

    let [data, setData] = useState(0)

    function clickIn() {
        setData(data + 1)
    }
    function clickRes() {
        setData(0)
    }
function maxValue1(){
setData(maxValue)
}
let  maxValue = 7


    return (
        <div >
            <div className={style.input}>
                <Display data={data} maxValue={maxValue}/>
                <div className={style.btn}>
                    <Btn title={'int'} onClickHe={clickIn} isDisabled={data===maxValue}/>

                    <Btn onClickHe={clickRes} title={'res'} isDisabled={data===0}/>
                </div>
                <div >
            <form >
                <input type="number"  min="0" max={maxValue} />
                <input type="number"  min="0" max="100" />
                <Btn onClickHe={maxValue1 } title={'intt'} isDisabled={data===maxValue}/>

            </form>
                </div>
            </div>
        </div>

    )
}

export default Counter



