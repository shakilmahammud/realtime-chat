import axios from 'axios'
import React, { createRef } from 'react'
import { makeToast } from '../../Toaster'
import proxy from '../../proxy.json'
import { useHistory } from 'react-router'

export const RegisterPage = () => {
    const nameRef=createRef()
    const emailRef=createRef()
    const passwordRef=createRef()
  const history=useHistory()
    const resgisterUser=(e)=>{
        e.preventDefault()
        const name=nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value
        axios.post(proxy.endpoint+"user/reg",{
            name,
            email,
            password
        }).then(res=>{
            console.log(res.data)
            makeToast("success",res.data.message)
            history.push('/login')
        }).catch(err=>{
            makeToast("error",err)
        })
    }
     return(
        <div className='d-flex align-items-center justify-content-center' style={{height:"800px"}}>
            <form style={{maxWidth:"550px",margin:"0 auto",}}>
 
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" name="name" ref={nameRef} />
        <label class="form-label" for="form3Example1">name</label>
      </div>
    </div>
    
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control"  name="email" ref={emailRef}/>
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control"  name="password" ref={passwordRef}/>
    <label class="form-label" for="form3Example4">Password</label>
  </div>

 

  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={resgisterUser}>Sign up</button>

 
  <div class="text-center">
  <p>Already have an account? <a href="#!">Login</a></p>
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
    )
}


