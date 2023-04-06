


import { useState } from "react"
import { useCookies } from 'react-cookie'
import { Context } from "../contextapi/contextapi"
import { useContext } from "react"
import { useRouter } from "next/router"


const Admin=()=>{
    const route=useRouter()
    const {handleAdmin,Logout}=useContext(Context)
   
    const [cookies, setCookie] = useCookies(['user'])

//login
const LoginObj={
    email:"",
    pass:""
}
const [log,setLog]=useState(LoginObj)

const handleLogin=(e)=>{
    setLog({...log,[e.target.name]:e.target.value})
}

const LoginBtn=async()=>{
    
       if(log.email.length==0&&log.pass.length==0){
        console.log('empty')
        alert('empty')
       }
       else{
        const Data=await fetch('http://localhost:8080/admin/login/',{
            method:"POST",
            body:JSON.stringify(log),
            headers: {
                "Content-type": "application/json"
            }
        
        })
        const res=await Data.json()
        console.log(res)
        if(res.Token){
            alert(res.msg)
            handleAdmin(res.Token)
            Logout()
            
            setCookie('token',res.Token,{path:"/"})
            
            console.log(res.Token,'admintoken')
            
                
                setLog(LoginObj)
                route.push('/')
        
        }else {alert(res.msg)}

       }


    


}



//registration
    const RegisterObj={
        name:"",
        email:"",
        pass:""
    }
const [reg,setReg]=useState(RegisterObj)


    const handleRegister=(e)=>{
        setReg({...reg,[e.target.name]:e.target.value})

    }
const RegisterBtn=async()=>{
    
   
    if(reg.name==0&&reg.email==0&&reg.pass==0){
        alert('Input Feild are Empty')
    }
    else{
        const Data=await fetch('http://localhost:8080/admin/register',{
        method:"POST",
        body:JSON.stringify(reg),
        headers: {
            "Content-type": "application/json"
        }
    })
    const res=await Data.json()
    
        console.log(res)
        alert(res.msg)
    
    
    setReg(RegisterObj)
    }
   
   
   
   
}
    return(

        <div>
        <h1 style={{textAlign:"center"}}>Admin Login Page</h1>



        <div style={{border:"1px solid black",height:"100%",display:"flex"}} className="container">
        <div className="loginsection" style={{border:"2px dotted gold",width:"30%",margin:"50px",padding:"50px"}}>
        <h5>Login Section</h5>
        <label>Login</label>
        <input  name="email" value={log.email} onChange={handleLogin} style={{marginLeft:"30px"}} placeholder="Enter Email" required/>
        <br/>
        <br/>
        <label>Password</label>
        <input  name="pass" value={log.pass} onChange={handleLogin} style={{marginLeft:"8px"}} placeholder="Enter Password" required/>
        <br/>
        <button onClick={LoginBtn} style={{marginTop:"20px",alignContent:"center"}}>Login</button>
        
        

        </div>





        <div className="registersection" style={{border:"2px dotted gold",width:"30%",margin:"50px",padding:"50px"}}>
        <h5>Register Section</h5>
        <label>Name</label>
        <input required name="name" value={reg.name} onChange={handleRegister} style={{marginLeft:"30px"}} placeholder="Enter Name"/>
        <br/>
        <br/>
        <label>Email Id</label>
        <input required name="email" value={reg.email} onChange={handleRegister} style={{marginLeft:"15px"}} placeholder="Enter Email"/>
        <br/>
        <br/>
        <label>Password</label>
        <input required name="pass" value={reg.pass} onChange={handleRegister} style={{marginLeft:"8px"}} placeholder="Enter Password"/>
        <br/>
        <button onClick={RegisterBtn} style={{marginTop:"20px",alignContent:"center"}}>Register</button>
        
        
        
       

        
        </div>

        
        </div>


        </div>
    )
}
export default Admin