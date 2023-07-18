
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBlog from './components/Add';
import ListBlog from './components/ListBlogs';
import Navbar from './components/Navbar';
import { UserProvider } from './UserContext';
import UserAuth from './UserAuth';
import ViewBlog from './components/ViewBlog';

function App() {
  return (
    <div >
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path='home' />
            <Route element={<Login />} path='login' />
            <Route element={<Signup />} path='signup' />
            <Route element={ <UserAuth> <AddBlog /> </UserAuth>} path='addblog' />
            <Route element={<ListBlog />} path='listblog' />
            <Route element={<ViewBlog />} path='viewblog/:id' />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
