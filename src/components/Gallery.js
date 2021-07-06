import React from 'react';
import './Gallery.css';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';

const Gallery = () => {
    return (
        <div className="gallery">
           <div> <img src={img1} alt="img1" /></div>
            <div><img src={img2} alt="img2" /></div>
            <div><img src={img3} alt="img3" /></div>
            <div><img src={img4} alt="img4" /></div>
           <div><img src={img5} alt="img5" /></div> 
           <div><img src={img6} alt="img6" /></div> 
           <div><img src={img7} alt="img7" /></div>
            <div><img src={img8} alt="img8" /></div>
            <div><img src={img9} alt="img9" /></div>
           <div><img src={img10} alt="img10" /></div> 
           <div><img src={img11} alt="img11" /></div> 
        </div>
    )
}

export default Gallery;