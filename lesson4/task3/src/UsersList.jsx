import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User.jsx'
import Pagination from './Pagination.jsx'

class UsersList extends Component {
    render() {
        const { users, currentPage, toIterate } = this.props

        return (
            <div>
                <Pagination />
                <ul className="users">
                    {users.map((user, index) => {
                        // if (index >= toIterate && index < toIterate + 3) {
                        if (index >= currentPage * 3 && index < currentPage * 3 + 3) {
                            return <User key={user.id} name={user.name} age={user.age} />
                        }
                        return
                    })}
                </ul>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        users: state.users.usersList,
        currentPage: state.users.currentPage,
    }
}
// const mapDispatch = {
//     nextPage: userActions.nextPage,
//     prevPage: userActions.prevPage,
// }
const connector = connect(mapState)
const ConnctedUsersList = connector(UsersList)
export default ConnctedUsersList
