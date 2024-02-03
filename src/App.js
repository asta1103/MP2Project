import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/navBar';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import Login from './Admin/login';
import Register from './Admin/register';
import Footer from './pages/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar/>
  
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>  


      <Footer/>



 </div>
  );
}

export default App;
