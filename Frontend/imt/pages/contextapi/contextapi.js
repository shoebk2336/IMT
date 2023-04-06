import React, { useState } from "react";

import { createContext } from "react";


export const Context=createContext()



const  ContextProvider=({children})=>{
   
   //admin section

   const [adminAuth,setAdminauth]=useState(false)

   const handleAdmin=(token)=>{
    if(token){
        setAdminauth(true)
        
    }
    else(setAdminauth(false))
   }
   const AdminLogout=()=>{
    setAdminauth(false)
   }
   
   
   
   
   
    //author section
    const [auth,setAuth]=useState(false)

    const Authenticate=(token)=>{
        if(token){
            console.log(token,'got')
            setAuth(true)
        }else setAuth(false)
    }
    const Logout=()=>{
        setAuth(false)
    }

    return(
<Context.Provider value={{Authenticate,auth,Logout,handleAdmin,adminAuth,AdminLogout}}>

{children}
</Context.Provider>

    )
}
export default ContextProvider