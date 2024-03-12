import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

// function AddAditionalProps (Component) {
//   const navigate = useNavigate();

//   return <Component navigate={navigate}/>
// }
import user, { deleteUser } from './userStore/userSlice'
class UserTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      editRedireact: false,
      editId: "",
    //  userData: JSON.parse(localStorage.getItem('users')) || [],

    };
  }

  componentDidMount() { 
    const { user } = this.props;
    
  }








  handleDelete = (id) =>  {
    const { dispatch } = this.props;
    dispatch(deleteUser(id)); 
  }

  render() {
 
    const { user } = this.props;
    console.log(user ,'table')
    return (
      <>

        {
          this.state.redirect && <Navigate to='/CreateUsers' replace={true} />
        }
        {

          this.state.editRedireact && <Navigate to={`/editUsers/?id=${this.state.editId}`} replace={true} />
        }
        <div>
       
          <button className='btn btn-secondary' onClick={() => {
            this.setState({ redirect: true });

          }}>Create</button>
        </div>
        <table className="table table-striped border p-2">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">Edit User</th>
              <th scope="col">Delete</th>
             
            </tr>
          </thead>
          <tbody>
            {user?.users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>
                
                  <button className='btn btn-secondary' onClick={() => {
                    this.setState({
                      editRedireact: true
                    });
                    this.setState({ editId: user.id })

                  }}>Edit</button>
                </td>

                <td><button className='btn btn-secondary' onClick={() => this.handleDelete(user.id)}>Delete</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user, 
});
export default connect(mapStateToProps)(UserTables);

