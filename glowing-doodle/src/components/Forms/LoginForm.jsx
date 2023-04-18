import { useState } from "react"
import '../../css/loginForm.css'
import arrowRight from '../../images/arrow-right.png'
import{FaMailBulk, FaPassport} from 'react-icons/fa'
import {Link} from "react-router-dom"

export default function LoginForm(){
    const [loginData, setLoginData] = useState(
        {
            usernameOrEmail:'',
            password:''
            
        }
    )

    const [isDisabled,setIsDisabled] = useState(true)

    const warrningMsg = isDisabled ? 'Please fill all fields' : '';

    function handleChange(event){
        const {name,value} = event.target

        setLoginData(prevLoginData=>({
            ...prevLoginData,
            [name]:value
        })
        )
        if(!loginData.usernameOrEmail.length || !loginData.password.length){
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('sssss')
        
      
} 
    return(
        <>
         
        <form className="form-container">
            <div className='input-container'>
             <i className="fa fa-user icon"></i>
             <input type='text' name='usernameOrEmail' value={loginData.usernameOrMail} placeholder='Username or email' onChange={handleChange}/>
            </div>
            
           <button className='submit' onClick={handleSubmit} disabled={isDisabled}>
            <img src={arrowRight}/></button>
              
            <div className='input-container' id="password">
            <FaPassport icon="fa-solid fa-passport" />
             <input type='password' name='password'  value={loginData.password} placeholder='Password' onChange={handleChange}/>
            </div>
            
        </form>
        <a className="forgot-password">Forgot your password</a>
        <div className="btn-container">
            <Link to={'/register'}>
               <button className="register">Register</button>
            </Link>
        </div>
        
        </>
    )
}