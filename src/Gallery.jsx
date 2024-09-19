// src/Gallery.jsx
import React from 'react';
import LightGallery from 'lightgallery/react';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images =[
    { src:"img_1.jpg", alt:"1"},
    { src:"img_2.jpg", alt:"2"},
    { src:"img_3.jpg", alt:"3"},
    { src:"img_4.jpg", alt:"4"},
    { src:"img_5.jpg", alt:"5"},
    { src:"img_6.jpg", alt:"6"},
    { src:"img_7.jpg", alt:"7"},
    { src:"img_8.jpg", alt:"8"},
    { src:"img_9.jpg", alt:"9"},
    { src:"img_10.jpg", alt:"10"},
    { src:"img_11.jpg", alt:"11"},
    { src:"img_12.jpg", alt:"12"},
    { src:"img_13.jpg", alt:"13"},
    { src:"img_14.jpg", alt:"14"},
    { src:"img_15.jpg", alt:"15"},
    { src:"img_16.jpg", alt:"16"},
    { src:"img_17.jpg", alt:"17"},
    { src:"img_18.jpg", alt:"18"},
    { src:"img_19.jpg", alt:"19"},
    { src:"img_20.jpg", alt:"20"},
    { src:"img_21.jpg", alt:"21"},
    { src:"img_22.jpg", alt:"22"},
    { src:"img_23.jpg", alt:"23"},
    { src:"img_24.png", alt:"24"},
    { src:"img_25.jpg", alt:"25"}
]

export function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="Gallery">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
      >
        {images.map((image,index)=>{
        return( 
            <a href={image.src} key={index}>
          <img alt={image.alt} src={image.src} />
        </a>
        )
        })}
        <a href="img_1.jpg">
          <img alt="img1" src="img_1.jpg" />
        </a>
        <a href="img_2.jpg">
          <img alt="img2" src="img_2.jpg" />
        </a>
        {/* Add more images as needed */}
      </LightGallery>
    </div>
  );
}
