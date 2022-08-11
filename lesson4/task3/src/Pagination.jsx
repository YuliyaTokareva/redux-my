import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import * as userActions from './users.actions'
//import Pagination from './Pagination.jsx'

const Pagination = ({ totalItems, currentPage, goNext, goPrev }) => {
    // const { users, currentPage, nextPage, prevPage } = this.props
    // const totalItems = Math.ceil(users.length / 3)
    const isPrevPageAvailable = currentPage === 0
    const isNextPageAvailable = currentPage + 1 === totalItems
    //console.log(currentPage + 1, totalItems)
    return (
        <div className="pagination">
            <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
                {isPrevPageAvailable ? '' : '←'}
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
                {isNextPageAvailable ? '' : '→'}
            </button>
        </div>
    )
}

// const mapState = (state) => {
//     return {
//         users: state.users.usersList,
//         currentPage: state.users.currentPage,
//     }
// }
// const mapDispatch = {
//     nextPage: userActions.nextPage,
//     prevPage: userActions.prevPage,
// }
// const connector = connect(mapState, mapDispatch)
// const ConnctedPagination = connector(Pagination)
export default Pagination
