import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from './users.actions'
//import Pagination from './Pagination.jsx'

class Pagination extends Component {
    render() {
        const { users, currentPage, nextPage, prevPage } = this.props
        const totalItems = Math.ceil(users.length / 3)

        return (
            <>
                <div className="pagination">
                    <button className="btn" onClick={prevPage} disabled={currentPage === 0}>
                        {currentPage === 0 ? '' : '←'}
                    </button>
                    <span className="pagination__page">{currentPage + 1}</span>
                    <button
                        className="btn"
                        onClick={nextPage}
                        disabled={currentPage + 1 === totalItems}
                    >
                        {currentPage === totalItems - 1 ? '' : '→'}
                    </button>
                </div>
            </>
        )
    }
}

const mapState = (state) => {
    return {
        users: state.users.usersList,
        currentPage: state.users.currentPage,
    }
}
const mapDispatch = {
    nextPage: userActions.nextPage,
    prevPage: userActions.prevPage,
}
const connector = connect(mapState, mapDispatch)
const ConnctedPagination = connector(Pagination)
export default ConnctedPagination
