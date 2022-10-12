import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/Auth/RequireAuth';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Add from './components/Dashboard/Add';
import Update from './components/Dashboard/Update';
import NotFound from './pages/NotFound';
import DashNav from './components/Dashboard/DashNav';
import ManageInventories from './components/Dashboard/manage inventory/ManageInventories';
import MyItems from './components/Dashboard/my items/MyItems';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/shared/Header';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/shared/Footer';

function App() {
  return (
    <>
      <Header />
      < Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/all-products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
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
      <Footer />
    </ >
  );
}

export default App;
