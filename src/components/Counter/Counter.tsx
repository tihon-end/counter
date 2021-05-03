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
import { Card, Grid, Paper } from "@material-ui/core";



function Counter() {


    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    let startCount = useSelector<AppRootStateType, number>(state => state.counter.startCount)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)

    const dispatch = useDispatch()


    function clickIn() {
        dispatch(setClickInAC())

    }

    function clickRes() {
        dispatch(setClickResAC())

    }


    let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let maxValue = event.currentTarget.valueAsNumber
        dispatch(onChangeMaxValueAC(maxValue))
    }

    let onChangeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
        let startCount = Number(event.currentTarget.value)
        dispatch(onChangeStartCountAC(startCount))
    }


    let set = () => {
        dispatch(onChangeSetAC())

    }



 let   validate = (!/^[0-9]/i.test(String(startCount )) || (!/^[0-9]/i.test(String(maxValue )))||
    (startCount>=maxValue) )? <div>{'enter correct value'}</div> : null

    return (
        <div className={style.input}>

            <Card variant={"outlined"} >
                <Grid container style={{padding: '20px'}}>
                    <Paper style={{width: '100%'}}>
                        <Display count={count} maxValue={maxValue} error={error}/>
                    </Paper>
                </Grid>

                <Grid container style={{display: 'flex', justifyContent: 'center'}}>
                    <Grid item style={{margin: '5px'}}>
                        <Btn title={'inc'} onClickHe={clickIn} isDisabled={count === maxValue}/>
                    </Grid>
                    <Grid item style={{margin: '5px'}}>
                        <Btn onClickHe={clickRes} title={'reset'} isDisabled={count === 0}/>
                    </Grid>
                </Grid>

                <Paper
                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item style={{margin: '5px'}}>
                        <InputStock name={'start'} value={startCount} setting={onChangeStartCount} label={'start'}
                                    variant={"outlined"} />
                    </Grid>
                    <Grid item style={{margin: '5px'}}>
                        <InputStock name={'max'} value={maxValue} setting={onChangeMaxValue} label={'max'} variant={"outlined"}/>
                        {validate}
                    </Grid>
                    <Grid item style={{margin: '5px'}}>
                        <Btn onClickHe={set} title={'set'} isDisabled={startCount>=maxValue }/>
                    </Grid>
                </Paper>
            </Card>


        </div>

    )
}

export default Counter



