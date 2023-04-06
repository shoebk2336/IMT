
import Quilltext from "./quill"
import { useCookies } from 'react-cookie'
import { useContext } from "react"
import { Context } from "./contextapi/contextapi"
import Link from "next/link"


const Create=()=>{
 const {auth}=useContext(Context)
  const [cookies, setCookie] = useCookies(['user'])


  const PostData=async(data)=>{
    console.log(data)

const Data=await fetch('http://localhost:8080/blogs/post',
{
    method:"POST",
    body:JSON.stringify(data),
    headers: {
        "Content-type": "application/json",
        "authorization":cookies.token
        
    }
}
)
const res=await Data.json()
if(res){alert(res.msg)}
console.log(res,'post response')


  }

    
    


    return(
        <div>
        {auth?
          <div>
          <h1>Create Post</h1>
          <Quilltext
          PostData={PostData}
         
          />
          </div>
          :
          <div style={{textAlign:"center",marginTop:"50px"}}>
          
          <Link style={{textDecoration:"none",fontWeight:"bold"}} href="./authlogin">Please Login to Continue </Link>

          </div>
        
        }
        
        
        </div>
    )
}

export default Create