import './Navigation.css'
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import { createElement } from 'react';

function Navigation(){
    function newnav(){
        
    }
    return(
        <div id='maincontainer'>
            <div id='mainnav'>
                <nav id='navdiv'>
                    <div id='mobilenav' onClick={newnav}>
                        <hr className='line'></hr>
                        <hr className='line'></hr>
                        <hr className='line'></hr>
                    </div>
                    <img id='logo' src={logo}/>
                    <Link className='linkname' id='mainpage' to="/Page1">Collections</Link>
                    <Link className='linkname' to="/Page2">Men</Link>
                    <Link className='linkname' to="/Page3">Women</Link>
                    <Link className='linkname' to="/Page4">About</Link>
                    <Link className='linkname' to="/Page5">Contact</Link>
                </nav>
                <div id='iconandlogo'>
                    <img id='cart' src={cart}/>  
                    <img id='avatar' src={avatar}/> 
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation