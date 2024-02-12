import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/page/Home';
import UserTable from './Component/page/UserTable';
import CreateUser from './Component/CreateUser';
import EditUser from './Component/EditUser';
import ViewUser from './Component/ViewUser';
import About from './Component/page/About';

import Collagedata from './Component/page/Collagedata';
import Task from './Component/page/Task';
import Home2 from './Component/Home2';
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        
          <Route path="/about" element={<About />} />
          <Route path="/usertable" element={<UserTable />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/user/view/:id" element={<ViewUser />} />
          <Route path="/collage" element={<Collagedata />} />
          <Route path="/task" element={<Task />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
