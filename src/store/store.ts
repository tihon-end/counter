

import {applyMiddleware, combineReducers, createStore} from 'redux'
// import thunkMiddleware from 'redux-thunk'
import {counterReducer} from "../components/redux/reducer";
import {loadState, saveState} from "../components/LocalStorage/localStorage";






// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
   counter: counterReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, loadState());  //, applyMiddleware(thunkMiddleware)
// определить автоматически тип всего объекта состояния

store.subscribe(()=>{
   saveState({
      counter: store.getState().counter
   })
})

export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppRootStateType = typeof store   типизация стора

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;



