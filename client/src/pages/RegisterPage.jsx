import { useState } from "react"
import axios from "axios"
import { Link, Navigate, useNavigate} from "react-router-dom"

export default function RegisterPage(){
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    async function registerUser(ev) {
      ev.preventDefault();
        try {
          await axios.post('/register', {
            name,
            email,
            password
          })
          alert('Successfully registered User can login now.')
        } catch (error) {
            alert("Registration Failed")
        }
    }
    return(
      <div className="mt-4 grow flex items-center justify-around ">
         <div className="mb-64">
                 <h1 className="text-4xl text-center mb-4">Register</h1>
              <form className="max-w-md mx-auto "  onSubmit={registerUser}>
                <input type="text" placeholder="Your Name here"  value={name} onChange={ev =>setName(ev.target.value)}/>
                <input type="email" placeholder="Your email here" value={email} onChange={ev =>setEmail(ev.target.value)} />
                <input type="password" placeholder="your password" value ={password} onChange={ev =>setPassword(ev.target.value)}    />
                <button className="primary">Register</button>
                <div className="py-2 text-center text-grey-500">Already have an Account  
                      <Link className="underline" to = {'/login'}>Login Here</Link>
                 </div>
             </form>
        </div>  
      </div>
     
    )    
}