import React from 'react'
import './AppDownload.css'  
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing optio quae cumque distinctio illo voluptates.</p>
        <div className='app-download-plateforms'>
            <img src={assets.play_store} alt='Download on Google Play' />
            <img src={assets.app_store} alt='Download on App Store'></img>
        </div>
    </div>
  )
}

export default AppDownload
