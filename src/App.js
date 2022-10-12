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
import Blogs from './pages/Blogs';
import Career from './pages/Career';

function App() {
  const allPublicRoutes = [
    {
      id: 1,
      component: Home,
      link: '/'
    },
    {
      id: 2,
      component: Products,
      link: '/all-products'
    },
    {
      id: 3,
      component: Blogs,
      link: '/blog'
    },
    {
      id: 4,
      component: AboutUs,
      link: '/about-us'
    },
    {
      id: 5,
      component: ContactUs,
      link: '/contact-us'
    },
    {
      id: 6,
      component: Login,
      link: '/login'
    },
    {
      id: 7,
      component: SignUp,
      link: '/signup'
    },
    {
      id: 8,
      component: NotFound,
      link: '*'
    },
    {
      id: 9,
      component: Career,
      link: '/career'
    },
  ]
  return (
    <>
      <Header />
      < Toaster />
      <Routes>
        {/* public routes */}
        {
          allPublicRoutes.map(route => <Route path={route.link} element={<route.component />} />)
        }
        {/* dashboard */}
        <Route path='/admin' element={<RequireAuth><DashNav /></RequireAuth>} >
          <Route index element={<ManageInventories />} />
          <Route path='add' element={<Add />} />
          <Route path='my-items' element={<MyItems />} />
        </Route>
        <Route path='/update/:id' element={<RequireAuth><Update /></RequireAuth>} />
      </Routes>
      <Footer />
    </ >
  );
}

export default App;
