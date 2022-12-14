import * as taskGateway from './taskGateway'
import { tasksListSelector } from './tasks.selectors'
export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED'

export const tasksListRecieved = (tasksList) => {
    const action = {
        type: TASKS_LIST_RECIEVED,
        payload: {
            tasksList,
        },
    }
    return action
}

export const getTasksList = () => {
    const thunkAction = function (dispatch) {
        taskGateway.fetchTasksList().then((tasksList) => dispatch(tasksListRecieved(tasksList)))
    }
    return thunkAction
}

export const updateTasksList = (taskId) => {
    const thunkAction = function (dispatch, getState) {
        const state = getState()
        const tasksList = tasksListSelector(state)

        const task = tasksList.find((task) => task.id === taskId)
        const updatedTask = {
            ...task,
            done: !task.done,
        }
        taskGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()))
    }
    return thunkAction
}

export const deleteTask = (taskId) => {
    const thunkAction = function (dispatch) {
        taskGateway.deleteTask(taskId).then(() => dispatch(getTasksList()))
    }
    return thunkAction
}

export const createTask = (text) => {
    const thunkAction = function (dispatch) {
        const newTask = {
            text: text,
            done: false,
        }
        taskGateway.createTask(newTask).then(() => dispatch(getTasksList()))
    }
    return thunkAction
}
