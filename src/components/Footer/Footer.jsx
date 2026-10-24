import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae velit dicta quaerat, cumque maxime porro cupiditate aliquid harum numquam soluta debitis sit ad nam repudiandae id quae quas veniam.</p>
             <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
        </div>

        <div className='footer-content-center'>
                <h2>Comapney</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Pocicy</li>
                </ul>
        </div>

        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-4115485</li>
                <li>conatct@tomato.com</li>
            </ul>
        </div>

      </div>
      <hr></hr>
      <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reversed</p>
    </div>
  )
}

export default Footer
