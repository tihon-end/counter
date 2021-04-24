
 let initialState = {
    count: 0 ,
    maxValue: 5,
    startCount: 0,
    error: false,

}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "CLICK-IN": {
            return {
                ...state, count: state.count + 1
            }
        }
        case "CLICK-RES": {
            return {
                ...state, count: state.count = 0
            }
        }
        case "ON-CHANGE-MAX-VALUE": {
            return {
                ...state, maxValue: action.maxValue
            }
        }
        case "ON-CHANGE-START-COUNT": {
            return {
                ...state, startCount: action.startCount
            }
        }
        case "ON-CHANGE-SET": {
            return {
                ...state, count: state.startCount,
            }
        }
        case "ON-CHANGE-ERROR":{
            return {
                ...state, error: action.error
            }
        }
        default:
            return state
    }
}

export const setClickInAC = () => ({type: 'CLICK-IN'} as const)
export const setClickResAC = () => ({type: 'CLICK-RES'} as const)
export const onChangeMaxValueAC = (maxValue: number) => ({type: 'ON-CHANGE-MAX-VALUE', maxValue} as const)
export const onChangeStartCountAC = (startCount: number) => ({type: 'ON-CHANGE-START-COUNT', startCount} as const)
export const onChangeSetAC = () => ({type: 'ON-CHANGE-SET'} as const)
export const onChangeErrorAC = (error: boolean) => ({type: 'ON-CHANGE-ERROR', error} as const)


export type SetClickInACType = ReturnType<typeof setClickInAC>
export type setClickResACType = ReturnType<typeof setClickResAC>
export type onChangeMaxValueACType = ReturnType<typeof onChangeMaxValueAC>
export type onChangeStartCountACType = ReturnType<typeof onChangeStartCountAC>
export type onChangeSetACType = ReturnType<typeof onChangeSetAC>
export type onChangeErrorACType = ReturnType<typeof onChangeErrorAC>


type ActionsType = SetClickInACType
    | setClickResACType
    | onChangeMaxValueACType
    | onChangeStartCountACType
    | onChangeSetACType
    | onChangeErrorACType






export default counterReducer

