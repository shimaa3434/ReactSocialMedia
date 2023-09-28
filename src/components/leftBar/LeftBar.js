import React from 'react'
import './LeftBar.css'
import friends from '../../assets/1.png'
import groups from '../../assets/2.png'
import market from '../../assets/3.png'
import watch from '../../assets/4.png'
import memries from '../../assets/5.png'
import events from '../../assets/6.png'
import gaming from '../../assets/7.png'
import videos from '../../assets/8.png'
import messages from '../../assets/9.png'
import fundraiser from '../../assets/10.png'
import tutorials from '../../assets/11.png'
import courses from '../../assets/12.png'

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
            <div className='user'>
                <div className='img-user' >
                  <img src="https://image.lexica.art/full_jpg/c713dc5a-9461-44b7-8f70-13b0d4dd2b5a"/>
                </div>
                <span>shimaa shaban</span>
            </div>
            <div className='item'>
                <img src={friends}/>
                <span>friends</span>
            </div>  
            <div className='item'>
                <img src={groups}/>
                <span>groups</span>
            </div> 
            <div className='item'>
                <img src={market}/>
                <span>maketplace</span>
            </div> 
            <div className='item'>
                <img src={watch}/>
                <span>watch</span>
            </div> 
            <div className='item'>
                <img src={memries}/>
                <span>memories</span>
            </div> 
        </div>
        <hr />
        <div className='menu'>
            <span>your shortcuts</span>
            <div className='item'>
                <img src={events}/>
                <span>events</span>
            </div>  
            <div className='item'>
                <img src={gaming}/>
                <span>gaming</span>
            </div> 
            <div className='item'>
                <img src={videos}/>
                <span>videos</span>
            </div> 
            <div className='item'>
                <img src={messages}/>
                <span>messages</span>
            </div> 
            <div className='item'>
                <img src={memries}/>
                <span>memories</span>
            </div> 
        </div>
        <hr />
        <div className='menu'>
            <span>others</span>
            <div className='item'>
                <img src={events}/>
                <span>fundraiser</span>
            </div>  
            <div className='item'>
                <img src={fundraiser}/>
                <span>gaming</span>
            </div> 
            <div className='item'>
                <img src={tutorials}/>
                <span>tutorials</span>
            </div> 
            <div className='item'>
                <img src={courses}/>
                <span>courses</span>
            </div> 
            
        </div>
      </div>
    </div>
  )
}

export default LeftBar