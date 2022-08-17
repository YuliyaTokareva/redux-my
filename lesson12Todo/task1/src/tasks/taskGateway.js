const baseUrl = 'https://62ac36829fa81d00a7ac26c0.mockapi.io/api/v1/task'

export const createTask = (taskData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    })
}

export const fetchTasksList = () => {
    return fetch(baseUrl).then((res) => {
        if (res.ok) {
            return res.json()
        }
    })
    // .then((tasksList) => {
    //     return tasksList.map(({ _id, ...task }) => ({ id: _id, ...task }))
    // })
}
export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(taskData),
    })
    // .then((response) => {
    //     if (!response.ok) {
    //         throw new Error('Faild to create task')
    //     }
    // })
}
export const deleteTask = (taskid) => {
    return fetch(`${baseUrl}/${taskid}`, {
        method: 'DELETE',
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Faild to delete task')
        }
    })
}
