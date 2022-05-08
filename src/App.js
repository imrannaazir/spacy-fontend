import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add/Add';
import Login from './components/Auth/Login';
import RequireAuth from './components/Auth/RequireAuth';
import Home from './components/Home/Home';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Shop from './components/Shop/Shop';
import bg from './assets/videos/bg.mp4'
import Update from './components/Update/Update';
import { Toaster } from 'react-hot-toast';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blog/Blogs';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className=' w-[100%] h-[100vh] object-cover fixed -z-30'

        src={bg}></video>
      <div>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/admin' element={<RequireAuth><ManageInventories /></RequireAuth>} />
          <Route path='/update/:id' element={<RequireAuth><Update /></RequireAuth>} />
          <Route path='/my-items' element={<RequireAuth><MyItems /></RequireAuth>} />
          <Route path='/add' element={<Add />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
