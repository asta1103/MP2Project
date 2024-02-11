import React from 'react'
import NavBar from '../pages/NavBar';
import Footer from '../pages/Footer';
import Main from './Main';

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <Main/>
        <Footer/>

    </div>
    
  )
}

export default RootLayout