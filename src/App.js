import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Add from './components/Add/Add';
import Login from './components/Auth/Login';
import RequireAuth from './components/Auth/RequireAuth';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Shop from './components/Shop/Shop';
import bg from './assets/videos/bg.mp4'
import Update from './components/Update/Update';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/About' element={<About />} />
          <Route path='/admin' element={<RequireAuth><ManageInventories /></RequireAuth>} />
          <Route path='/update/:id' element={<RequireAuth><Update /></RequireAuth>} />
          <Route path='/add' element={<Add />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
