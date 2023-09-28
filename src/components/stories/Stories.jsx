import React, { useContext } from 'react'
import './stories.css'
const Stories = () => {
    const currentUser = {name: "shimaa shaban", profilePic: "https://image.lexica.art/full_jpg/c713dc5a-9461-44b7-8f70-13b0d4dd2b5a"}
    const stories = [
        {
          id: 1,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];
    
  return (
    <div className='stories'>
          <div className="srory" >
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            <button>+</button>
            </div>
        {stories.map(item => (
            <div className="srory" key={item.id}>
                <img src={item.img} alt="" />
                <span>{item.name}</span>
            </div>
        ))}
        
    </div>
  )
}

export default Stories