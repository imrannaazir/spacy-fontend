import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import RequireAuth from './components/Auth/RequireAuth';
import Home from './components/Home/Home';
import { Toaster } from 'react-hot-toast';
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
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
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
