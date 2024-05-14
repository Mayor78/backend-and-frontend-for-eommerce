import React, { useContext, useState } from 'react';

import SummaryApi from '../common';
import {  toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../context';

const Login = () => {

  const [data,setData] = useState({
    email : "",
    password : ""
})
const navigate = useNavigate()
const { fetchUserDetails, } = useContext(Context)

const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}


const handleSubmit = async(e) =>{
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.signIn.url,{
        method : SummaryApi.signIn.method,
        credentials : 'include',
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
        toast.success(dataApi.message)
        navigate('/')
        // fetchUserDetails()
       
    }

    if(dataApi.error){
        toast.error(dataApi.message)
    }

}

console.log("data login",data)
  return (
 
   
    <div className='container' id='login'>
    
     

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
              <h1 className='mb-7'>Login to you  account</h1>
              {/* <input type="text" className="form-control" id="exampleInputName" placeholder='Enter your name'
               /> */}
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               placeholder='Email address'
               name='email'
               value={data.email}
               onChange={handleOnChange} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"
               placeholder='Password' 
               value={data.password}
               name='password' 
               onChange={handleOnChange}/>
            </div>
            <div className="mb-3 form-check">
            <button type="submit" className="btn btn-danger ml-3 mx-5">Login</button>
            <button type="submit" className="btn ml-3 mx-5 text-danger">Forgot your password?</button>
           
             
            </div>
            <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
          </form>

        </div>
      </div>
    
    </div>
   
  );
}

export default Login;
