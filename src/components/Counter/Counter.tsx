import React, {ChangeEvent, useEffect, useState} from "react";
import {Display} from "../Display/Display";
import {Btn} from "../Btn/Btn";
import style from './Counter.module.css'
import Input from "../Input/Input"


function Counter() {
    let [count, setCount] = useState<number>(0)

    function clickIn() {
        setCount(count + 1)
    }

    function clickRes() {
        setCount(0)
        setMaxValue(5)
        setStartCount(0)

    }


    let [error, setError] = useState<boolean>(false)
    let [startCount, setStartCount] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    useEffect(()=>{
        let startCount=  localStorage.getItem('counterKey')
        if(startCount){
            let newStartCount = JSON.parse(startCount)
            setStartCount(newStartCount)
        }
    }, [])

    useEffect(()=>{
        let maxValue=  localStorage.getItem('maxValueKey')
        if(maxValue){
            let newMaxValue = JSON.parse(maxValue)
            setMaxValue(newMaxValue)
        }
    }, [])


useEffect(()=>{
    localStorage.setItem('counterKey', JSON.stringify(startCount))
},[startCount])


    useEffect(()=>{
    localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
},[maxValue])

    let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(event.currentTarget.value)
        setMaxValue(maxValue)

    }

    let onChangeStartData = (event: ChangeEvent<HTMLInputElement>) => {
        let startCount = Number(event.currentTarget.value)
        setStartCount(startCount)
    }


    let temp = () => {
        setCount(startCount)
        if (startCount  === -1) {
            setError(true)
            alert('положительное число введи')
            setCount(0)
            setStartCount(0)
            setMaxValue(5)

        }
        if (startCount > maxValue) {
            setError(true)
            alert('другое число')
            setCount(0)
            setStartCount(0)
            setMaxValue(5)

        }


    }


    return (
        <div>
            <div className={style.input}>
                <Display data={count} maxValue={maxValue}/>
                <div className={style.button}>
                    <div className={style.btn}>
                        <Btn title={'inc'} onClickHe={clickIn} isDisabled={count === maxValue}/>
                        <Btn onClickHe={clickRes} title={'reset'} isDisabled={count === 0}/>
                    </div>
                </div>

            </div>
            <div className={style.input}>
                <Input value={startCount} setting={onChangeStartData}/>
                <Input value={maxValue} setting={onChangeMaxValue}/>
                <div className={style.btn}>
                    <Btn onClickHe={temp} title={'set'} isDisabled={count === maxValue}/>

                </div>
            </div>
        </div>

    )
}

export default Counter



