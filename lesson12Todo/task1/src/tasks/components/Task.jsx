import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Task = ({ id, done, text, onChange, onDelete }) => {
    const listItemClass = classNames(`list-item`, { 'list-item_done': done })
    return (
        <li className={listItemClass}>
            <input
                type="checkbox"
                className="list-item__checkbox"
                defaultChecked={done}
                onChange={() => onChange(id)}
            />
            <span className="list-item__text">{text}</span>
            <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
        </li>
    )
}

Task.propTypes = {
    id: PropTypes.string,
    done: PropTypes.bool,
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}
Task.defaultProps = {
    done: false,
    text: '',
}
export default Task
