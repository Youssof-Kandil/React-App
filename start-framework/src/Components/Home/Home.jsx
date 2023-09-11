import React from 'react'
import framework from "../../framework.svg"

export default function Home() {
  return <>
  
  <div className="home size">
    <div className='home-inner d-flex align-items-center justify-content-center size'>
      <div className="content text-center">
        <img className='home-img' src={framework} alt=" this is an image" />
        <h2 className='fs-1'>START FRAMEWORK</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3'></div>
          <i class="fa-solid fa-star"></i>
          <div className='line ms-3'></div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  </div>
  </>
}
