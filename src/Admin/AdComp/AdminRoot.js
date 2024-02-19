import AdminMain from './AdminMain';
import Sidebar from '../Sidebar';
import { useState } from 'react';


const AdminRoot = () => {
  const [toggle, setToggle] = useState(true)
  const Toggle = () =>{
    setToggle(!toggle)
  }
  return (

    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle && <div className='col-2 bg-white '>
            <Sidebar/>
        </div>}
        {toggle && <div className='col-10'>
            <AdminMain Toggle={Toggle}/>
         </div>}
      </div>
    </div>


    
    
  )
}

export default AdminRoot