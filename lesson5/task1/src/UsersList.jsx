import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import User from './User.jsx'
import * as userActions from './users.actions'
import Pagination from './Pagination.jsx'
import { usersListSelector, currentPageSelector } from './users.salectors'

class UsersList extends Component {
    render() {
        const { users, currentPage, nextPage, prevPage } = this.props
        //const totalItems = Math.ceil(users.length / 3)
        // const itemsPerPage = 3
        return (
            <div>
                <Pagination
                    totalItems={users.length}
                    itemsPerPage={3}
                    currentPage={currentPage}
                    goNext={nextPage}
                    goPrev={prevPage}
                />
                <ul className="users">
                    {users.map((user, index) => {
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
UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    currentPage: PropTypes.string.isRequired,
    goNext: PropTypes.func.isRequired,
    goPrev: PropTypes.func.isRequired,
}

const mapState = (state) => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    }
}
const mapDispatch = {
    nextPage: userActions.nextPage,
    prevPage: userActions.prevPage,
}
const connector = connect(mapState, mapDispatch)
const ConnctedUsersList = connector(UsersList)
export default ConnctedUsersList
