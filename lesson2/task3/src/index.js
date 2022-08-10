import store from './store'
import { addUser, deleteUser } from './users.reduser'

console.log(store.getState())
store.dispatch(addUser({ id: 76, name: 'Sarah' }))
console.log(store.getState())
store.dispatch(deleteUser(76))
console.log(store.getState())
