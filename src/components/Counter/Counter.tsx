import React, {ChangeEvent} from "react";
import {Display} from "../Display/Display";
import {Btn} from "../Btn/Btn";
import style from './Counter.module.css'
import InputStock from "../Input/InputStock"
import {
    onChangeErrorAC,
    onChangeMaxValueAC,
    onChangeSetAC,
    onChangeStartCountAC,
    setClickInAC,
    setClickResAC
} from "../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";


function Counter() {


    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startCount = useSelector<AppRootStateType, number>(state => state.counter.startCount)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)
    const dispatch = useDispatch()


    function clickIn() {
        dispatch(setClickInAC())

    }

    function clickRes() {
        dispatch(setClickResAC())

    }

    let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(event.currentTarget.value)
        dispatch(onChangeMaxValueAC(maxValue))
    }

    let onChangeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
        let startCount = Number(event.currentTarget.value)
        dispatch(onChangeStartCountAC(startCount))
    }

    let set = () => {
        dispatch(onChangeSetAC())
        if (startCount === -1) {
            dispatch(onChangeErrorAC(true))
            dispatch(setClickResAC())

            alert('положительное число введи')                  //?

        }
        if (startCount >= maxValue) {
            (dispatch(onChangeErrorAC(true)))
            alert(' другое число')                          //?
            dispatch(setClickResAC())
        }
    }

    return (
        <div>
            <div className={style.input}>
                <Display data={count} maxValue={maxValue} error={error}/>
                <div className={style.button}>
                    <div className={style.btn}>
                        <Btn title={'inc'} onClickHe={clickIn} isDisabled={count === maxValue}/>
                        <Btn onClickHe={clickRes} title={'reset'} isDisabled={count === 0}/>
                    </div>
                </div>
            </div>
            <div className={style.input}>
                <InputStock value={startCount} setting={onChangeStartCount}/>
                <InputStock value={maxValue} setting={onChangeMaxValue}/>

                <div className={style.btn}>
                    <Btn onClickHe={set} title={'set'} isDisabled={startCount<=count}/>
                </div>

            </div>
        </div>


    )
}

export default Counter



