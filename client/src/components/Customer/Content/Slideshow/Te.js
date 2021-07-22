import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {AppContext} from '../../../../Context/AppProvider'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './sty.css'


export default function Te  () {
  const {Slideshow}=React.useContext(AppContext)
 // console.log({sl:Slideshow})
    return (
      
      <div className="slide-container">
        <Slide 
        duration={1000}
        indicators={true}
        slidesToShow={2}
        
        autoplay={true}>
         
          {Slideshow.map(slide=>{
            return(
              <div className="each-slide" key={slide.id}>
              <div style={{'backgroundImage': `url(${slide.photo})`}}>
                <span>{slide.decr}</span>
              </div>
            </div>

            )
          })}


          {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div> */}
        </Slide>
      </div>
    )
}