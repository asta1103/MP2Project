import AdminMain from './AdminMain';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';


const AdminRoot = () => {

  const [toggle, setToggle] = useState(true)
  const Toggle = () =>{
    setToggle(!toggle)
  }
  return (

    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle && <div className='col-2 bg-white vh-100'>
            <Sidebar/>
        </div>}
       

        {toggle && <div className='col-10' style={{ overflow: 'auto', maxHeight: '100vh' }}>
            <NavbarAdmin Toggle={Toggle} />
            <AdminMain/>
         </div>}
      </div>
    </div> 
    
  )
}

export default AdminRoot