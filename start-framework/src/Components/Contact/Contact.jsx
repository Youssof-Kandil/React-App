import React from 'react'

export default function Contact() {
  return <>
    <div className='contact size'>
    <div className='about-inner d-flex  justify-content-center size'>
      <div className="content text-center pt-5 pb-3">
          <h2 className='fw-bold fs-1'>CONTACT COMPONENT</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3'></div>
          <i class="fa-solid fa-star"></i>
          <div className='line ms-3'></div>
        </div>
        
        <div className='form-inner text-start w-100'>
            <form className='w-100 p-3 mx-auto mt-5' >
                <label htmlFor="userName">userName</label>
                <input className='w-100 form-control' type="text"  id='userName'/>
                <label htmlFor="userAge">userAge</label>
                <input className='w-100 form-control' type="text"  id='userAge'/>
                <label htmlFor="userMail">userMail</label>
                <input className='w-100 form-control' type="mail"  id='userMail'/>
                <label htmlFor="userPassword">userPassword</label>
                <input className='w-100 form-control' type="text"  id='userPassword'/>
                  <button className='btn mt-4 text-white colorrr'> Send Message</button>
            </form>
          </div>
      </div>
      
    </div>
    </div>
  </>
}
