import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'
import CreateTaskImput from './CreateTaskImput.jsx'
import { tasksListSelector } from '../tasks.selectors'
import { createTask, fetchTasksList, updateTask, deleteTask } from '../taskGateway.js'
import { connect } from 'react-redux'
import * as tasksAction from '../tasks.actions.js'

class TasksList extends Component {
    componentDidMount() {
        this.props.getTasksList()
    }

    render() {
        const sortedList = this.props.tasks.slice().sort((a, b) => a.done - b.done)
        return (
            <main className="todo-list">
                <CreateTaskImput onCreate={this.props.createTask} />
                <ul className="list">
                    {sortedList.map((task) => (
                        <Task
                            key={task.id}
                            text={task.text}
                            done={task.done}
                            id={task.id}
                            onChange={this.props.updateTasksList}
                            onDelete={this.props.deleteTask}
                        />
                    ))}
                </ul>
            </main>
        )
    }
}
TasksList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTasksList: PropTypes.func.isRequired,
    updateTasksList: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
}

const mapDispatch = {
    getTasksList: tasksAction.getTasksList,
    updateTasksList: tasksAction.updateTasksList,
    deleteTask: tasksAction.deleteTask,
    createTask: tasksAction.createTask,
}
const mapState = (state) => {
    return {
        tasks: tasksListSelector(state),
    }
}

export default connect(mapState, mapDispatch)(TasksList)
