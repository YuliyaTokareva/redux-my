import store from './store'
import { increment, decrement, reset } from './counter.actions'
import { addUser, deleteUser, updateUser } from './users.actions'
store.subscribe(() => console.log(store.getState()))
store.dispatch(increment())

store.dispatch(decrement())

store.dispatch(addUser({ id: 76, name: 'Sarah' }))
store.dispatch(addUser({ id: 70, name: 'Nike' }))
store.dispatch(updateUser(70, { name: 'OLOLO' }))
