import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Register from './Components/Ragister';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import About from './Components/About';
import Contactus from './Components/Contactus';
import BlogCurd from './Components/BlogCurd';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { UserProvider } from './Context/AuthContext';
import BlogCard from './Components/BlogCard';
import AllUsers from './Components/AllUsers';
import RoleProtectedRoute from './services/RoleProtectedRoute';
import ProtectedRouts from './services/ProtectedRouts';
import ReadBlog from './Components/ReadBlog';
import Profile from './Components/Profile';
import AllBlogs from './Components/AllBlogs';
import Contentx from './Components/Contentx';
import Newsblogs from './Components/Newsblogs';

function App() {
  return (

    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Navbar /><HomePage /><Footer /></>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/blogcard' element={<><Navbar /><BlogCard /><Footer /></>} />
            <Route path='/readblog' element={<><Navbar /><ReadBlog /><Footer /></>} />
            <Route path='/about' element={<><Navbar /><About /><Footer /></>} />
            <Route path='/contactus' element={<><Navbar /><Contactus /><Footer /></>} /> 
            <Route path='/contentx' element={<><Navbar /><Contentx /><Footer /></>} />
            <Route path='/newsblogs' element={<><Navbar /><Newsblogs /><Footer /></>} />

            
            <Route element={<ProtectedRoutesWrapper />}>
               {/* <Route path='/homepage' element={<HomePage />} />
              <Route path='/about' element={<About />} /> */}
              {/* <Route path='/contactus' element={<Contactus />} />  */}
              <Route path='/profile' element={<Profile />} />
              <Route path='/allblogs' element={<AllBlogs />} />

            </Route>

            <Route element={<RoleProtectedRoute allowedRoles={['admin']} />}>
              <Route path='/blogcurd' element={<><Navbar /><BlogCurd /><Footer /></>} />
              <Route path='/allusers' element={<><Navbar /><AllUsers /><Footer /></>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <ToastContainer theme='dark' autoClose={2000} />
    </div>
  );
}


function ProtectedRoutesWrapper() {
  return (
    <>
      <Navbar />
      <ProtectedRouts />
      <Footer />
    </>
  );   
}

export default App;
