import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Add from './components/Add/Add';
import RequireAuth from './components/Auth/RequireAuth';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/admin' element={<RequireAuth><ManageInventories /></RequireAuth>} />
        <Route path='/add' element={<RequireAuth><Add /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
