
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './logo.png';

const Profile = () => {
  return (
   <div className='ee'>
    <label htmlFor="employee" className='lab'>Employee Name</label>
    <input type="text" className="pinput1" id="pinput1" placeholder="Employee Name" /><br/><br/>
    <label htmlFor="employeeid" className='lab'>Employee Id</label>
    <input type="text" className="pinput2" id="pinput1" placeholder="Employee Id" /><br/><br/>
    <label htmlFor="employeeid" className='lab'>Date Of Birth</label>
    <input type="date" className="pinput3" id="date" placeholder="Date of Birth" /><br/><br/>
    <label htmlFor="employeeid" className='lab'>Joining Date</label>
    <input type="date" className="pinput4" id="pinput1" placeholder="Employee Name" /><br/><br/>
    <label htmlFor="photo" className="form-label">Upload Resume</label>
                  <input type="file" className="form-control" id="photo" />
                  <button className='update1' id>Update</button>
                  <button className='cancel' id>Cancel</button>
   </div>
  );
};


const Attendance = () => {
  const add1 = () => {
    let table = document.getElementById("attendanceTable").getElementsByTagName('tbody')[0];
    let time = document.getElementById("attendanceTime").value;
    let date = document.getElementById("attendanceDate").value;

    let row = document.createElement('tr');
    let time_row = document.createElement('td');
    time_row.innerHTML = time;
    let date_row = document.createElement('td');
    date_row.innerHTML = date;

    row.append(time_row);
    row.append(date_row);

    table.append(row);
  }

  return (
    <div className='task'>
      <div className='tdate'>
        <label htmlFor="attendanceDate" className='lab'>Date:</label>
        <input type="date" className="pinput4" id="attendanceDate" placeholder="Date" /><br /><br />
      </div>
      <div className='discription'>
        <h6 className='ti'>Time:</h6>
        <input type='time' id='attendanceTime' className='time' /><br /><br />
        <div className='glinkk'>
          <label className='gflink'>Google Form Link:</label>
          <input placeholder='Google form link' className='glink' /><br /><br />
        </div>
        <button className='comp2' onClick={add1}>Completed</button>
      </div>
      <table className='table1' id="attendanceTable">
        <thead>
          <tr>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
}



const Task = () =>{
  const add = () => {
      let table=document.getElementsByTagName("table")[0];
      let des=document.getElementById("plac").value;
      let date=document.getElementById("pinput1").value;

      let row = document.createElement('tr');
      let type_row = document.createElement('td');
      type_row.innerHTML = des
      let name_row = document.createElement('td');
      name_row.innerHTML = date

      row.append(type_row);
      row.append(name_row);
    

      table.append(row);
  }

   

  return(
    <div className='task'>
      <div className='tdate'>
      <label htmlFor="employeeid" className='lab'>Task Date:</label>
      <input type="date" className="pinput4" id="pinput1" placeholder="Employee Name" /><br/><br/>
      </div>
      <div className='discription'>
        <label className='des'>Description:</label><br></br>
        <textarea type='text' placeholder='Description' className='plac' id='plac'></textarea><br></br>
        <button className='comp1'onClick={()=>add()} >Completed</button>
        <button className='can1' >Cancel</button>

      </div>
      <table className='table'>
        <tr id='tr'>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </table>
      
    </div>

  );
}

const Nextpage = () => {
  const [activePage, setActivePage] = useState(null); 

  const handleClick = (page) => {
    setActivePage(page); 
  };

  return (
    <div className='reg1'>
      <header className="header">
        <div className="div">
          <nav className="nav">
            <div className='logo1'>
              <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="ul">
              <li><a href="#" className='wh' onClick={() => handleClick('Profile')}>Profile</a></li>
              <li><a href="#" className='wh' onClick={() => handleClick('Daily Task')}>Daily Task</a></li>
              <li><a href="#" className='wh' onClick={() => handleClick('Attendance')}>Attendance</a></li>
              <li><a href="#" className='wh' onClick={() => handleClick('Daily Activities')}>Daily Activities</a></li>
              <li><a href="#" className='wh' onClick={() => handleClick('Report Analysis')}>Report Analysis</a></li>
              <li><a href="#" className='wh' onClick={() => handleClick('Notifications Alert')}>Notifications Alert</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {activePage === 'Profile' && <Profile />}
        {activePage === 'Daily Task' && <Task />}
        {activePage === 'Attendance' && <Attendance />}
        {activePage === 'Daily Activities' && <div className='act'><h2>Admin Can Access</h2><p>Granting a user as an Administrator gives that user full permissions to ALL settings area. This includes but is not limited to the: configuration of your workflow, ability to deactivate users, access to the billing portal, access to perform a full database download.</p></div>}
        {activePage === 'Report Analysis' && <div className='act'><h2>Admin Can Access</h2><p>Granting a user as an Administrator gives that user full permissions to ALL settings area. This includes but is not limited to the: configuration of your workflow.</p></div>}
        {activePage === 'Notifications Alert' && <div className='act'><h2>Admin Can Access</h2><p> Administrators can change security settings, install software and hardware, access all files on the computer, and make changes to other user accounts.</p></div>}
      </main>
    </div>
  );
};

export default Nextpage;