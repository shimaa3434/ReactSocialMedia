import React from 'react'
import './Profile.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faMap } from '@fortawesome/free-regular-svg-icons'
import { faDotCircle, faHandDots, faLanguage, faListDots } from '@fortawesome/free-solid-svg-icons'
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" className='cover'/>
        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" className='profile'/>
      </div>
      <div className='profile_container'>
            <div className='user_info'>
                <div className='left'>
                  <Link to="#">
                    <FontAwesomeIcon icon={faFacebook} size='2x'/>
                  </Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faInstagram} size='2x'/>
                  </Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faTwitter} size='2x'/>
                  </Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                  </Link> 
                  <Link to="#">
                    <FontAwesomeIcon icon={faPinterest} size="2x"/>
                  </Link>
                </div>
                <div className='center'>
                  <span>shimaa shaban</span>
                  <div className='info'>
                      <div className='item'>
                            <FontAwesomeIcon icon={faMap}/>
                            <span>Egypt</span>
                      </div>
                      <div className='item'>
                            <FontAwesomeIcon icon={faLanguage}/>
                            <span>Arabic</span>
                      </div>
                  </div>
                  <button>follow</button>
                </div>
                <div className='right'>
                  <FontAwesomeIcon icon={faEnvelopeOpen}/>
                  <FontAwesomeIcon icon={faListDots}/>
                </div>
            </div>
      </div>
      <Posts />
    </div>
  )
}

export default Profile