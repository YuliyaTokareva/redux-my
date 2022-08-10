import store from './store'
import { increment, decrement, reset } from './counter.actions'
import { addUser, deleteUser, updareUser } from './users.actions'
store.subscribe(() => console.log(store.getState()))
store.dispatch(increment())

store.dispatch(decrement())

store.dispatch(addUser({ id: 76, name: 'Sarah' }))

store.dispatch(deleteUser(76))
