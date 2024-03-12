import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      isAdmin: false, // Checkbox state
      gender: 'male', // Radio button state
      editingUserId: null
    };
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [name]: val });
  };

  handleAddUser = () => {
    const { firstName, lastName, email, country, isAdmin, gender } = this.state;
    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      country,
      isAdmin,
      gender
    };
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      isAdmin: false,
      gender: 'male'
    }));
  };

  handleEditUser = (userId) => {
    const userToEdit = this.state.users.find((user) => user.id === userId);
    if (userToEdit) {
      this.setState({
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        email: userToEdit.email,
        country: userToEdit.country,
        isAdmin: userToEdit.isAdmin,
        gender: userToEdit.gender,
        editingUserId: userId
      });
    }
  };

  handleUpdateUser = () => {
    const { firstName, lastName, email, country, isAdmin, gender, editingUserId } = this.state;
    this.setState((prevState) => ({
      users: prevState.users.map((user) =>
        user.id === editingUserId ? { ...user, firstName, lastName, email, country, isAdmin, gender } : user
      ),
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      isAdmin: false,
      gender: 'male',
      editingUserId: null
    }));
  };

  handleDeleteUser = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId)
    }));
  };

  render() {
    const { users, firstName, lastName, email, country, isAdmin, gender, editingUserId } = this.state;
    return (
      <div>
        <h2>User Management</h2>
        <div>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="country"
            value={country}
            onChange={this.handleInputChange}
            placeholder="Country"
          />
          <label>
            Is Admin:
            <input
              type="checkbox"
              name="isAdmin"
              checked={isAdmin}
              onChange={this.handleInputChange}
            />
          </label>
          <div>
            Gender:
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          {editingUserId ? (
            <button onClick={this.handleUpdateUser}>Update User</button>
          ) : (
            <button onClick={this.handleAddUser}>Add User</button>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Is Admin</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                <td>{user.gender}</td>
                <td>
                  <button onClick={() => this.handleEditUser(user.id)}>Edit</button>
                  <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
