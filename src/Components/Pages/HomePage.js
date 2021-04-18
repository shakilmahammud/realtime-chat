import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export const HomePage = () => {
    const history=useHistory()
    useEffect(() =>{
     const token=localStorage.getItem("CC_token")
     if(!token){
        history.push("/login")
     }else{
         history.push("/dashboard")
     }
    },[])
    return (
        <div>
            
        </div>
    )
}
