import { useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser= async (e)=>{
    e.preventDefault();
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setdata({})
        toast.success('Login Successfully. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder='enter Name...' value={data.name} onChange={(e)=>setdata({...data, name: e.target.value})}/>
        <label>email</label>
        <input type="email" placeholder='enter email...' value={data.email} onChange={(e)=>setdata({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder='enter password...' value={data.password} onChange={(e)=>setdata({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
