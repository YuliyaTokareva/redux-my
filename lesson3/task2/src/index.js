import store, { increment, decrement, reset } from './counter'

store.subscribe(() => console.log(store.getState()))
store.dispatch(increment())
