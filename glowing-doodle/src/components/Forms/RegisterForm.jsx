import { useState } from "react"
import '../../css/registerForm.css'
import arrowRight from '../../images/arrow-right.png'
import{FaMailBulk, FaPassport} from 'react-icons/fa'
import { Link } from "react-router-dom"



export default function RegisterForm (){
    const [registerData, setRegisterData] = useState(
        {
            username:'',
            email:'',
            password:'',
            repeatPassword:''
        }
    )

    
    
    
    const [isDisabled,setIsDisabled] = useState(true)
    
    
    function handleChange(event){
        const {name,value} = event.target

        setRegisterData(prevRegisterData=>({
            ...prevRegisterData,
            [name]:value
        })
        )
        if(!registerData.username.length || !registerData.email.length || !registerData.password.length || !registerData.repeatPassword.length){
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    

    function handleSubmit(event) {
        event.preventDefault()
        
        
       if(registerData.password === registerData.repeatPassword) {
           console.log("Success")
        } else {
        alert("Password didn't match")
        return
       }
}

    return (
        <>
        <form className="form-container">
        <div className="btn-container">
            <Link to={'/login'}>
               <button className="login">Login</button>
            </Link>
        </div>
            <div className='input-container'>
             <i className="fa fa-user icon"></i>
             <input type='text' name='username' value={registerData.username} placeholder='Username' onChange={handleChange}/>
            </div>
            <div className='input-container'>
            <FaMailBulk icon="fa-solid fa-envelope" />
             <input type='email' name='email' value={registerData.email} placeholder='Email' onChange={handleChange}/>
            </div>
           <button className='submit' onClick={handleSubmit} disabled={isDisabled}>
            <img src={arrowRight}/></button>
              
            <div className='input-container'>
            <FaPassport icon="fa-solid fa-passport" />
             <input type='password' name='password' value={registerData.password} placeholder='Password' onChange={handleChange}/>
            </div>
            <div className='input-container' id='repeatPassword'>
            <FaPassport icon="fa-solid fa-passport" />
             <input type='password' name='repeatPassword' value={registerData.repeatPassword} placeholder='Repeat Password' onChange={handleChange}/>
            </div>
        </form>
        </>
    )
}