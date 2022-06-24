import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import RequireAuth from './components/Auth/RequireAuth';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { Toaster } from 'react-hot-toast';
import Blogs from './components/Blog/Blogs';
import SignUp from './components/Auth/SignUp';
import Add from './components/Dashboard/Add';

import Update from './components/Dashboard/Update';
import NotFound from './components/shared/NotFound';
import DashNav from './components/Dashboard/DashNav';
import ManageInventories from './components/Dashboard/manage inventory/ManageInventories';
import MyItems from './components/Dashboard/my items/MyItems';

function App() {
  return (
    <div className='bg-black'>
      {/*   <video
        autoPlay
        loop
        muted
        className=' w-[100%] h-[100vh] object-cover fixed -z-30'

        src={bg}></video> */}

      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blogs' element={<Blogs />} />
        {/* dashboard */}
        <Route path='/admin' element={<RequireAuth><DashNav /></RequireAuth>} >
          <Route index element={<ManageInventories />} />
          <Route path='add' element={<Add />} />
          <Route path='my-items' element={<MyItems />} />

        </Route>
        <Route path='/update/:id' element={<RequireAuth><Update /></RequireAuth>} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
