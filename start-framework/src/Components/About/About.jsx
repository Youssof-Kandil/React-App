import React from 'react'

export default function About() {
  return <>
    <div className='about size'>
    <div className='about-inner d-flex align-items-center justify-content-center size'>
      <div className="content text-center">
          <h2 className='fw-bold fs-1'>ABOUT COMPONENT</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3'></div>
          <i class="fa-solid fa-star"></i>
          <div className='line ms-3'></div>
        </div>
        <div className='container text-start'>
          <div className='row px-5'>
            <div className="col-md-6 ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6 pe-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}
