import axios from 'axios'
import React, { createRef } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import proxy from '../../proxy.json'
import { makeToast } from '../../Toaster'

export const LoginPage = () => {
    const emailRef=createRef()
    const passwordRef=createRef()
  const history=useHistory()
    const loginUser=(e)=>{
        e.preventDefault()
     
        const email=emailRef.current.value
        const password=passwordRef.current.value
        axios.post(proxy.endpoint+"user/login",{
            email,
            password
        }).then(res=>{
            console.log(res.data)
            makeToast("success",res.data.message)
            localStorage.setItem("CC_token",res.data.token)
            history.push('/dashboard')
        }).catch(err=>{
            makeToast("error",err)
        })
    }
    return (
        <section >
        <div className='d-flex align-items-center justify-content-center' style={{height:"800px"}}>
        <form style={{maxWidth:"550px",margin:"0 auto",}}>
 
 <div class="form-outline mb-4">
   <input type="email" id="form2Example1" class="form-control"  name="email" ref={emailRef}/>
   <label class="form-label" for="form2Example1">Email address</label>
 </div>


 <div class="form-outline mb-4">
   <input type="password" id="form2Example2" class="form-control"  name="password" ref={passwordRef}/>
   <label class="form-label" for="form2Example2">Password</label>
 </div>

 <div class="row mb-4">
   <div class="col d-flex justify-content-center">

     <div class="form-check">
       <input
         class="form-check-input"
         type="checkbox"
         value=""
         id="form2Example3"
         checked
       />
       <label class="form-check-label" for="form2Example3"> Remember me </label>
     </div>
   </div>

   <div class="col">
    
     <a href="#!">Forgot password?</a>
   </div>
 </div>

 <button type="submit" class="btn btn-primary btn-block mb-4" onClick={loginUser}>Sign in</button>

 <div class="text-center">
   <p>Don't have an account? <Link to="/register">Register</Link></p>
   <p>or sign up with:</p>
   <button type="button" class="btn btn-primary btn-floating mx-1">
     <i class="fab fa-facebook-f"></i>
   </button>

   <button type="button" class="btn btn-primary btn-floating mx-1">
     <i class="fab fa-google"></i>
   </button>

   <button type="button" class="btn btn-primary btn-floating mx-1">
     <i class="fab fa-twitter"></i>
   </button>

   <button type="button" class="btn btn-primary btn-floating mx-1">
     <i class="fab fa-github"></i>
   </button>
 </div>
</form>
        </div>
        </section>
    )
}
