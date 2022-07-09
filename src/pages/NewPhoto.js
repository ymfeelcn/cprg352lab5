import React, { useState } from "react";
import axios from "axios";
import './NewPhoto.css'

function NewPhoto() {

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [notice, setNotice] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async ()=> {
    setNotice('');
    setIsSuccess(false);
    if (!userId) {
      setNotice('UserId is required');
      return;
    }
    if (!title) {
      setNotice('Title is required');
      return;
    }
    const data = {
      userId,
      title,
    };
    console.log(data);
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/photos", data);
      console.log('res', res);
      setNotice('Add new photo success');
      setIsSuccess(true);
    } catch (error) {
      console.log('error', error);
      setNotice(error.message);
    }
  }

  return (
    <div className="new-photo">
      <h3>New Photo</h3>
      <div className="new-photo-form">
        <label>UserId</label>
        <input type="text" name="userid" placeholder="UserId" onChange={(e)=>setUserId(e.target.value)} value={userId} required/>
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
        <button onClick={handleSubmit}>Submit</button>
        {notice && <p className={isSuccess ? 'success' : 'error'}>{notice}</p>}
      </div>
    </div>
  );
}

export default NewPhoto;