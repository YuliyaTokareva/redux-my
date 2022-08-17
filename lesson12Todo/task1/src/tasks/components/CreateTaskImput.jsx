import React, { Component } from 'react';

class CreateTaskImput extends Component {
    state = {
        value: '',
    };
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleTaskCteate = () => {
        this.props.onCreate(this.state.value);
        this.setState({
            value: '',
        });
    };
    render() {
        return (
            <div className="create-task">
                <input
                    className="create-task__input"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className="btn create-task__btn" onClick={this.handleTaskCteate}>
                    Create
                </button>
            </div>
        );
    }
}
export default CreateTaskImput;
// 1. Take text from input
// 2. create task with this text
// 3 Add created task to the list
