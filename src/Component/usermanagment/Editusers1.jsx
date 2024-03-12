import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom/dist';
import { editUser } from './userStore/userSlice';

 class Editusers1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      updateItems: [],
      redirect: false,
      editedUser: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: false,
        country: '',
        gender: '',

      }
    };
  }


  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get('id');
  
    const { user } = this.props;
    
    console.log(user,'user,,,,,,,');
    const edituserData = user.users.find(item => item.id === userId)
  
    this.setState({
      editedUser: edituserData
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { editedUser } = this.state;
    // const userData = JSON.parse(localStorage.getItem('users'));
    // const index = userData.findIndex(user => user.id === editedUser.id);
    const { dispatch } = this.props;
   
    dispatch(editUser(editedUser));
    // if (index !== -1) {
    //   userData[index] = editedUser;
    //   localStorage.setItem('users', JSON.stringify(userData));

    // } else {
    //   console.error('User not found');

    // }


    this.setState({ redirect: true });
  }


  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const val = type === 'checkbox' ? checked : value;
    this.setState(prevState => ({
      editedUser: {
        ...prevState.editedUser,
        [name]: val
      }
    }));
  }


  render() {


    const { user } = this.props;
    console.log(user,'user,,,,,,,');

    const { editedUser, redirect} = this.state;
    
    if (redirect) {
      return <Navigate to="/table" />
    }

    return (
  <div>
        <h2>Edit User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>id:</label>
            <input type="text" name="id" value={editedUser.id} onChange={this.handleChange} />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={editedUser.firstName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={editedUser.lastName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={editedUser.email} onChange={this.handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={editedUser.password} onChange={this.handleChange} />
          </div>
          <div>
            <input type="checkbox" name="subscribe" checked={editedUser.subscribe} onChange={this.handleChange} />
            <label>Subscribe to newsletter</label>
          </div>
          <div>
            <label>Country:</label>
            <select name="country" value={editedUser.country} onChange={this.handleChange}>
              <option value="">Select...</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
           
            </select>
          </div>
          <div>
            <label>Gender:</label>
            <div>
              <input type="radio" name="gender" value="male" checked={editedUser.gender === 'male'} onChange={this.handleChange} />
              <label>Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" checked={editedUser.gender === 'female'} onChange={this.handleChange} />
              <label>Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" checked={editedUser.gender === 'other'} onChange={this.handleChange} />
              <label>Other</label>
            </div>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user, 
});
export default connect(mapStateToProps)(Editusers1);
