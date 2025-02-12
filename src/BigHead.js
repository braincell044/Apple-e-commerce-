import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';


const BigHead = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
  return (
    <div>
        <nav className='navbar'>
                     <div className='container'>
                           <div className=' d-flex w-100 '>
                           <div className='col apple'>
                         <Link to="/" className='nav-link p-3 fs-1'></Link>
                           </div>
                           <div className='col flex-d apple'>
                           <Link to="/store" className='nav-link p-3'>Store</Link>
                           <Link to="/mac"  className='nav-link  p-3'>Mac</Link>
                           <Link to="/iphone"  className='nav-link  p-3'>Iphone</Link>
                           <Link to="/ipad"  className='nav-link  p-3'>Ipad</Link>
                           <Link to="/airpod"  className='nav-link  p-3'>Airpod</Link>
                           <Link to="/accessories"  className='nav-link  p-3'>Accessories</Link>
                           <Link to="/support"  className='nav-link  p-3'>Support</Link>
                        
                           </div>
                           <div className='col flex-d '>
                               <div className='py-2 px-5'>
                               <i className='bx bx-search fs-2'></i>
                               <i className='bx bx-shopping-bag fs-2'></i>
                             
                               </div>
                           </div>
                           <i className='bx bx-menu fs-1 flex-h fox' onClick={handleMenu}></i>
                           </div>
         
                    
                       </div>
            </nav>
  
            {menu &&    <div className='container '>
                           <div className='row'>
                         <h1>Hey</h1>
                           <div className='col  flex-h text-start'>
                           <Link to="/Store" className='nav-link p-3'>Store</Link>
                           <Link to="/mac"  className='nav-link  p-3'>Mac</Link>
                           <Link to="/iphone"  className='nav-link  p-3'>Iphone</Link>
                           <Link to="/ipad"  className='nav-link  p-3'>Ipad</Link>
                           <Link to="/airpod"  className='nav-link  p-3'>Airpod</Link>
                           <Link to="/accessories"  className='nav-link  p-3'>Accessories</Link>
                           <Link to="/support"  className='nav-link  p-3'>Support</Link>
                        
                           </div>
                   
                           </div>
         
                    
                       </div>
                    
                 }
                     

  



    </div>
  )
}

export default BigHead