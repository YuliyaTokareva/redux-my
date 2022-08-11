import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../counter.actions'

const Counter = ({ counter, incr, decr, res }) => {
    return (
        <div className="counter">
            <button data-action="decrease" onClick={decr} className="counter__button">
                -
            </button>
            <span className="counter__value" onClick={res}>
                {counter}
            </span>
            <button data-action="increase" onClick={incr} className="counter__button">
                +
            </button>
        </div>
    )
}
const mapState = (state) => {
    return {
        counter: state,
    }
}
const mapDispatch = (dispatch) => {
    return {
        incr: () => dispatch(increment()),
        decr: () => dispatch(decrement()),
        res: () => dispatch(reset()),
    }
}
const connector = connect(mapState, mapDispatch) //HOC
export default connector(Counter)
