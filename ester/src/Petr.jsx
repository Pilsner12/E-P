import React from 'react'
import "./styles/main.scss";


const Petr = () => {
  return (
    <>
    <h1 className='petr-title'>Who is Petr?</h1>
    <div className='grid-container'>
        <div className='grid-item'>
            <img className='project-img' src="" alt="" />
        </div>
        <div className='grid-item'>
            <img src="" alt="" />
        </div>
        <div className='grid-item'>
            <p><a className='link' href='https://dkdentalcare.netlify.app/'>DK Dental Care</a></p>
        </div>
        <div className='grid-item'>
            <p><a className='link' href='https://www.figma.com/design/f5J0e8h3maTpGaYNiQJrKq/PetrS-CV?node-id=0-1&p=f'>Petr CV</a></p>
        </div>
     </div>
    </>
  )
}

export default Petr