import React, { useState } from 'react';
import SummaryApi from '../common/index';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';


const SignUp = () => {
  const [Data, setData] = useState({
    email: "",
    password: "",
    name : "",
   
});

const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
        ...prev,
        [name]: value
    }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Data.password) {
      try {
        const dataResponse = await fetch(SummaryApi.signUp.url, {
          method: SummaryApi.signUp.method,
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(Data)
        });
  
        if (dataResponse.ok) {
          const data = await dataResponse.json();
  
          if (data.success) {
            toast.success(data.message);

            // alert(data.message)
            navigate("/login");
          } else {
            toast.error(data.message);
          }
        } else {
          console.error("Server responded with an error:", dataResponse.statusText);
        }
  
      } catch (err) {
        console.error("Fetch error:", err);
      }
    } else {
      console.log("Passwords don't match");
    }
   
  };
  return (
    <div className='container m-3 '>
      <div className='row'>
        {/* Image column */}
        <div className='col-lg-6 d-lg-flex align-items-center justify-content-lg-end mb-4'>
          {/* Use process.env.PUBLIC_URL to specify the path to the image */}
          <img src={process.env.PUBLIC_URL + '/assets/Side Image (3).png'} alt="Signup" className='img-fluid' />
        </div>

        {/* Form column */}
        <div className='col-lg-6 d-flex flex-column justify-content-center'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h1 className='mb-5'>Create an account</h1>
              <input type="text" className="form-control"
               id="exampleInputName" 
              placeholder='Enter your name'
              name='name'
              value={Data.name}
              onChange={handleChange}
              required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               placeholder='Email address'
               name='email' 
               value={Data.email}
               onChange={handleChange}
               required/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"
               placeholder='Password' 
               name='password'
               value={Data.password}
               onChange={handleChange}
               required/>
            </div>
            <div className="mb-3 form-check">
              <p>Already have an account? <Link to="/login">Login</Link></p> {/* Link to the login page */}
            </div>
            <button className="btn btn-danger ml-3 px-4">Signup</button>
            <button type="submit" className="btn mt-3 d-flex align-items-center border"><FcGoogle size={24} className="mr-2" /> Signup with Google</button>
          </form>
         
        </div>
      </div>
      
    </div>
  );
}

export default SignUp;
