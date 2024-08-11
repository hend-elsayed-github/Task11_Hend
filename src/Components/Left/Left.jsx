import './Left.css'
import image1 from '../../assets/images/image-product-1.jpg'
import image2 from '../../assets/images/image-product-2.jpg'
import image3 from '../../assets/images/image-product-3.jpg'
import image4 from '../../assets/images/image-product-4.jpg'
import { useState } from "react";

function Left(){
    const [selectedimage, setselectedimage]=useState(image1);

    function Clickedimg(event){
       setselectedimage(event.target.getAttribute("imagesource")) 
    //    console.log(event.target.getAttribute("imagesource"))
    
    }

    return(
        <div id='leftdiv'>
            <div id='mainimagediv'>
                <img id='mainimage'  src={selectedimage}/>
            </div>
            <div id='smallimages'>
                <img className='smallimage' onClick={Clickedimg} style={selectedimage==image1? {opacity:".3", border: "3px solid hsl(26, 77%, 42%)"}:null} imagesource={image1} src={image1}/>
                <img className='smallimage' onClick={Clickedimg} style={selectedimage==image2? {opacity:".3", border: "3px solid hsl(26, 77%, 42%)"}:null} imagesource={image2} src={image2}/>
                <img className='smallimage' onClick={Clickedimg} style={selectedimage==image3? {opacity:".3", border: "3px solid hsl(26, 77%, 42%)"}:null} imagesource={image3} src={image3}/>
                <img className='smallimage' onClick={Clickedimg} style={selectedimage==image4? {opacity:".3", border: "3px solid hsl(26, 77%, 42%)"}:null} imagesource={image4} src={image4}/>
            </div>
        </div>
    )
}

export default Left