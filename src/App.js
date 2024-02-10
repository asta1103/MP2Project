import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/navBar';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import Login from './Admin/Login';
import SignUp from './Admin/SignUp';
import Admin from './Admin/Admin';
import ClientInfo from './Admin/ClientInfo';



const App = () => {
  return (
    <div className='App'>
 
  
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
      </Routes>  

 
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/client' element={<ClientInfo />} />

      </Routes>  



 </div>
  );
}

export default App;
