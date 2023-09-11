import React from 'react'
import img1 from '../../poert1.png'
import img2 from '../../port2.png'
import img3 from '../../port3.png'

export default function Portfolio() {
  return <>
    <div className='port size'>
    <div className='about-inner d-flex  justify-content-center size'>
      <div className="content text-center pt-5 pb-3">
          <h2 className='fw-bold fs-1'>PORTFOLIO COMPONENT</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3'></div>
          <i class="fa-solid fa-star"></i>
          <div className='line ms-3'></div>

        </div>
        <div className='container'>
          <div className='row g-5'>
            <div className="col-lg-4 col-md-6">
              <div className='inner-item position-relative overflow-hidden'>
                <img src={img1} alt="" className='w-100 rounded-3'/>
                <div className='inner-layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center '>
                <i class="fa-sharp fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='inner-item position-relative overflow-hidden'>
                <img src={img2} alt="" className='w-100 rounded-3'/>
                <div className='inner-layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center '>
                <i class="fa-sharp fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='inner-item position-relative overflow-hidden'>
                <img src={img3} alt="" className='w-100 rounded-3'/>
                <div className='inner-layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center '>
                <i class="fa-sharp fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='inner-item position-relative overflow-hidden'>
                <img src={img1} alt="" className='w-100 rounded-3'/>
                <div className='inner-layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center '>
                <i class="fa-sharp fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='inner-item position-relative overflow-hidden'>
                <img src={img2} alt="" className='w-100 rounded-3'/>
                <div className='inner-layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center '>
                <i class="fa-sharp fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='inner-item position-relative overflow-hidden'>
                <img src={img3} alt="" className='w-100 rounded-3'/>
                <div className='inner-layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center '>
                <i class="fa-sharp fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}
