import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addUser } from './userStore/userSlice';

class CreateUsers1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      subscribe: false,
      country: '',
      gender: '',
      submitSuccess: false
    };
  }
getUserList () {
  return "Users list"
}
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: val
    });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, subscribe, country, gender, id } = this.state;
    const newUser = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        subscribe: subscribe,
        country: country,
        gender: gender
    };
    this.props.addUser(newUser );
    this.setState({ submitSuccess: true });
    this.setState({
      id:'',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      subscribe: false,
      country: '',
      gender: ''
    });
 }

  render() {
    const { submitSuccess } = this.state;
    if (submitSuccess) {
      return <Navigate to="/table"  />;
    }
    return (
      <div>
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
           <div>
            <label>id:</label>
            <input type="text" name="id" value={this.state.id} onChange={this.handleChange} />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <input type="checkbox" name="subscribe" checked={this.state.subscribe} onChange={this.handleChange} />
            <label>Subscribe to newsletter</label>
          </div>
          <div>
            <label>Country:</label>
            <select name="country" value={this.state.country} onChange={this.handleChange}>
              <option value="">Select...</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div>
            <label>Gender:</label>
            <div>
              <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleChange} />
              <label>Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleChange} />
              <label>Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" checked={this.state.gender === 'other'} onChange={this.handleChange} />
              <label>Other</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(null, mapDispatchToProps)(CreateUsers1);
