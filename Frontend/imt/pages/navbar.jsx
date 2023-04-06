import Link from "next/link"
import {useRouter} from "next/router"
import { Context } from "./contextapi/contextapi"
import { useContext } from "react"


const Navbar=()=>{
    const route=useRouter()

   const {auth,Logout,adminAuth,AdminLogout}=useContext(Context)
    return(
        <div style={{display:"flex",justifyContent:"space-evenly",border:"0px solid " ,height:"50px",lineHeight:"50px",backgroundColor:"#E3CF67",color:"black",fontWeight:"bold"}}>
        
       <Link style={{textDecoration:"none"}} href='/'>Home</Link>
        <Link style={{textDecoration:"none"}} href='/createPost'>Create</Link>

        {adminAuth?
            <button style={{height:"50%",marginTop:"15px",borderRadius:"3px"}}  onClick={AdminLogout}>Admin Logout</button>:
            
            <Link style={{textDecoration:"none"}} href='/admin'>Admin Login</Link>}

        {auth?
            <button style={{height:"50%",marginTop:"15px",borderRadius:"3px"}} onClick={Logout}>Logout</button>:
            <Link style={{textDecoration:"none"}} href='/authlogin'>Author Login</Link>
        }
        <button onClick={()=>route.push('/readme')}  style={{fontSize:"10px",height:"18px",marginTop:"10px",marginRight:"-100px"}}>Readme</button>
        
        
        
        
        </div>
    )

     
}
export default Navbar