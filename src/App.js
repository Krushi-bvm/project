import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/page/Home';
import UserTable from './Component/page/UserTable';
// import CreateUser from './Component/CreateUser';
// import EditUser from './Component/EditUser';
import ViewUser from './Component/ViewUser';
import About from './Component/page/About';

import Collagedata from './Component/page/Collagedata';
import Task from './Component/page/Task';
import Home2 from './Component/Home2';
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Users from './Component/usermanagment/Users';
// import CreateUser from './Component/usermanagment/CreateUser'
import CreateUsers1 from './Component/usermanagment/CreateUsers1'
import Editusers1 from './Component/usermanagment/Editusers1';
import UserTables from './Component/usermanagment/UserTables';

import FirstTest from './Component/page/FirstTest';
import User from './Component/page/User';
import CreateTodo from './Component/todolist/CreateTodo';
import Bingo from './Component/Bingo/Bingo';
import MindGame from './Component/Bingo/MindGame';
import CreateUser from './Component/CreateUser';
import EditUser from './Component/EditUser';
import Login from './Component/Login';
import Books from './Component/Books';
import FormComponent from './Component/FormComponent';

const PrivateRoute = ({children}) => {
  const isAuthenticated = localStorage.getItem('token');

  if(isAuthenticated) return children;
  else return  <Navigate to="/login" />
   

}

function App() {
  const role = localStorage.getItem("role");
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />

       {role  === 'user' && <Route path="/user/:id" element={<PrivateRoute><EditUser /></PrivateRoute> } />}
         
         
       
       {/* <Route path="/user/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} /> */}
        <Route path="/home" element={<Home2 />} />
        
          <Route path="/about" element={<About />} />
          <Route path="/usertable" element={<PrivateRoute><UserTable/></PrivateRoute>} />
          <Route path="/create" element={<CreateUser />} />
          {/* <Route path="/createuser" element={<CreateUser />} /> */}
         
          <Route path="/view/:id" element={<ViewUser />} />
          <Route path="/collage" element={<Collagedata />} />
          <Route path="/task" element={<Task />} />
          <Route path="/CreateUsers" element={<CreateUsers1 />} />
          <Route path="/editUsers" element={<Editusers1 />} />
          <Route path="/table" element={<UserTables/>} />
          {/* <Route path="/user" element={<User/>} /> */}
          {/* <Route path="/user" element={<Users />} /> */}
          {/* <Route path="/update" element={<EditUser />} /> */}
          {/* <Route path="/CreateUsers" element={<CreateUsers1 />} /> */}
          {/* <Route path="/user" element={<User/>} /> */}
          <Route path="/book" element={<Books/>} />
          <Route path="/form" element={<FormComponent/>} />

         
          <Route path="/createTodo" element={<CreateTodo/>} />
          <Route path="/bingo" element={<Bingo/>} />
          <Route path="/mind" element={<MindGame/>} />
          <Route path="/first" element={<FirstTest/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
