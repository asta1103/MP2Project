import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import RootLayout from './Components/RootLayout';

import Login from './Admin/Login';
import SignUp from './Admin/SignUp';

import AdminRoot from './Admin/AdComp/AdminRoot';
import ClientInfo from './Admin/ClientInfo';
import ClientInquiry from './Admin/ClientInquiry';
import Admin from './Admin/Admin';
import User from './Admin/User';
import Profile from './Admin/Profile';




const App = () => {
  return (
    <div className='App'>

    
 
  
      <Routes>

        <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
        </Route>

      </Routes> 
 
      <Routes>
        <Route element ={<AdminRoot/>}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/client' element={<ClientInfo />} />
        <Route path='/inquiry' element={<ClientInquiry />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user' element={<User />} />

        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>  
       



 </div>
  );
}

export default App;
