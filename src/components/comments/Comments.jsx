import React from 'react'
import './comments.css'
const Comments = () => {
    const currentUser = {name: "shimaa shaban",
     profilePic: "https://image.lexica.art/full_jpg/c713dc5a-9461-44b7-8f70-13b0d4dd2b5a"}

    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
  return (
    <div className='comments'>
        <div className="container">
            <div className="write">
                <div>
                    <img src={currentUser.profilePic} alt=''/>
                </div>
                <input type="text" name="" placeholder='write a comment....' id="" />
                <button>send</button>
            </div>
            {comments.map(item => (
                <div className="comment" key={item.id}>
                    <img src={item.profilePicture} alt=""/>
                    <div className="info">
                        <span className='name'>{item.name}</span>
                        <p>{item.desc}</p>
                    </div>
                    <span className='date'>1 hour age</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Comments