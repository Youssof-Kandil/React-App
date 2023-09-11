import React from 'react'

export default function Footer() {
  return <>

  <footer>
    <div className='footer-start'>
    <div className='container text-center text-white'>
      <div className='row'>
        <div className="col-md-4">
          <h3>LOCATION</h3>
          <p className='pb-2'>2215 John Daniel Drive</p>
          <p className='pb-2'>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <div className='footer-icons d-flex justify-content-center'>
            <div className='footer-icons-single d-flex align-items-center justify-content-center border me-2 rounded-circle'><i className="fa-brands fa-facebook"></i></div>
            <div className='footer-icons-single d-flex align-items-center justify-content-center border me-2 rounded-circle'><i className="fa-brands fa-twitter"></i></div>
            <div className='footer-icons-single d-flex align-items-center justify-content-center border me-2 rounded-circle'><i className="fa-brands fa-linkedin-in"></i></div>
            <div className='footer-icons-single d-flex align-items-center justify-content-center border me-2 rounded-circle'><i className="fa-solid fa-globe"></i></div>
          </div>
        </div>
        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p className='pb-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    </div>
    <div className='Footer-sec-part text-center text-white '>
            <p className='pt-2'>Copyright © Your Website 2021</p>
    </div>
  </footer>
  </>
}
