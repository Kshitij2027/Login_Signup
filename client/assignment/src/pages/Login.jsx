import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    email: '',
    password: '',
  })
  const loginUser= async (e)=>{
    e.preventDefault()
    const {email, password} = data
    try {
      const {data}= await axios.post('/login', {
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      } else {
        setdata({});
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    // <div>
    //   <form onSubmit={loginUser}>
    //   <label>email</label>
    //     <input type="email" placeholder='enter email...' value={data.email} onChange={(e)=>setdata({...data, email: e.target.value})}/>
    //     <label>Password</label>
    //     <input type="password" placeholder='enter password...' value={data.password} onChange={(e)=>setdata({...data, password: e.target.value})}/>
    //     <button type='submit'>Submit</button>
    //   </form>
    // </div>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4" onSubmit={loginUser}>
          <div>
            <label htmlFor="email" className="block font-medium">email:</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" value={data.email} onChange={(e)=>setdata({...data, email: e.target.value})}/>
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">Password:</label>
            <input type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" value={data.password} onChange={(e)=>setdata({...data, password: e.target.value})}/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
}
