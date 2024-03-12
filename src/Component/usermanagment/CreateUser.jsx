import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            newUserText: '',
            editUserText: '',
            editingIndex: null,
            editFields: [],
        };
    }

    addUser = () => {
        const { users, newUserText } = this.state;
        const newItems = [...users, newUserText];
        this.setState({ users: newItems, newUserText: '' });
    }

    updateUser = (index) => {
        const { users, editFields } = this.state;
        const newItems = [...users];
        newItems[index] = editFields[index];
        this.setState({ users: newItems, editingIndex: null });
    };

    deleteUser = (index) => {
        const { users } = this.state;
        const newItems = users.filter((item, i) => i !== index);
        this.setState({ users: newItems });
    }

    handleChange = (event) => {
        this.setState({ newUserText: event.target.value });
    }

    handleEditChange = (event, index) => {
        const { editFields } = this.state;
        const newEditFields = [...editFields];
        newEditFields[index] = event.target.value;
        this.setState({ editFields: newEditFields });
    };

    startEditing = (index) => {
        this.setState({ editingIndex: index, editUserText: this.state.editFields[index] });
    };

    render() {
        const { users, newUserText, editFields, editingIndex } = this.state;

        return (
            <div>
                <ul>
                    {users.map((user, index) => (
                        <div key={index}>
                            <div>{user}</div>
                            <button onClick={() => this.deleteUser(index)}>Delete</button>
                            {editingIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editFields[index] || ''}
                                        onChange={(event) => this.handleEditChange(event, index)}
                                    />
                                    <button onClick={() => this.updateUser(index)}>Update</button>
                                </div>
                            ) : (
                                <button onClick={() => this.startEditing(index)}>Edit</button>
                            )}
                        </div>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newUserText}
                    onChange={this.handleChange}
                />


                <button onClick={this.addUser}>Add User</button>
            </div>
        )
    }
}
