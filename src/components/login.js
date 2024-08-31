import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './background.png';
import './style.css';
// import image2 from './bgimg.png';


const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('employee').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
      alert('Must Fill All Fields');
      return false;
    }

    

    navigate('/nextpage'); 
  };

  return (
    <div className='reg'>
    
      <h5 className='emplog'>Employee Login</h5>
      <div className='usepas'>
        <label htmlFor="employee" className='lab'>Employee Id</label>
        <input type="text" className="form-control" id="employee" placeholder="Employee Id" />
        <label htmlFor="password" className='lab'>Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" />
        <button className='but1' onClick={handleSubmit}>Submit</button>
        <button className='but2'>Cancel</button>
      </div>
    </div>

  );
};

export default Register;