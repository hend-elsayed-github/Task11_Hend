import './Right.css'
import minusicon from '../../assets/images/icon-minus.svg'
import plusicon from '../../assets/images/icon-plus.svg'
import carticon from '../../assets/images/icon-cart.svg'
import { useState } from 'react'
useState


function Right(){
    const [counter,setcounter]=useState(0)

    function increase(){
        
        setcounter(counter+1)
        
    }

    function decrease(){
        if (counter>0){
            setcounter(counter-1)
        }
    }
    return(
       <div id='rightdiv'>
            <label id='companyname'>SNEAKER COMPANY</label>
            <h2 id='header'>Fall Limited Edition Sneakers</h2>
            <p id='text'>These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll withstand
                everything the weather can offer.
            </p>
            <div id='pricediv'>
                <label id='newprice'>$125.00</label>
                <label id='discount'>50%</label>
                <label id='oldpriceinmobile'><del>$250</del></label>
            </div>
            <label id='oldprice'><del>$250</del></label>
        <div id='btndiv'>
            <button id='btn1'>
                <img onClick={decrease} src={minusicon}/>
                <label>{counter}</label>
                <img onClick={increase} src={plusicon}/>
            </button>
            <button id='btn2'>
                <img id='smallcart' src={carticon}/>
                <label>Add to cart</label>
            </button>
        </div>
       </div>
    )
}

export default Right