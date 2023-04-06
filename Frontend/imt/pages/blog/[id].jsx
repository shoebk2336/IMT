
import { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Quilltext from '../quill'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { Context } from '../contextapi/contextapi'
import { useContext } from 'react'


const Single=({res})=>{
  const {auth,adminAuth}=useContext(Context)
  const [cookies, setCookie] = useCookies(['user'])
  const route=useRouter()
  //admin edit

  const [adminEdit,setAdminEdit]=useState(false)
const handleAdminEdit=()=>{
  if(adminEdit){setAdminEdit(false)}else{setAdminEdit(true)}

}
//edit is combine for author and admin
//now delete for admin

const handleAdminDelete=async(id)=>{

  const Del=await fetch(`http://localhost:8080/adminblogs/delete/${id}`,{
    method:"DELETE",
    headers: {
      "Content-type": "application/json",
     
      
  }
  })
  const res=await Del.json()
  if(res){alert(res.msg)
  route.push('/')
  
  }
  console.log(res)
  


}







 
  

//author Edit and Delete
const [edit,setEdit]=useState(false)

const handleEdit=()=>{
  if(edit){setEdit(false)}else(setEdit(true))

}


const PostData=async(data)=>{
  const {id}=route.query
  
if(auth){
  
  const update=await fetch(`http://localhost:8080/blogs/edit/${id}`,{
    method:"PATCH",
    body:JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      "authorization":cookies.token
      
  }
  })
  console.log('author initiated')
  

const res=await update.json()
if(res){alert(res.msg)

}
if(res.msg){route.push('/')}
console.log(res)

  console.log(data,'patchdata')
  console.log(adminAuth,'admin')

}//else auth is false adminauth is true

else if(adminAuth){

  const update=await fetch(`http://localhost:8080/adminblogs/edit/${id}`,{
    method:"PATCH",
    body:JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      
      
  }
  })
  console.log('admin initiated')

const res=await update.json()
if(res){alert(res.msg)

}
if(res.msg){route.push('/')}
console.log(res)

  console.log(data,'patchdata')
}


  
 
}

const handleDelete=async(id)=>{

const Del=await fetch(`http://localhost:8080/blogs/delete/${id}`,{
  method:"DELETE",
  headers: {
    "Content-type": "application/json",
    "authorization":cookies.token
    
}
})
const res=await Del.json()
if(res){alert(res.msg)
route.push('/')

}
console.log(res)

  
}




  
console.log(res,'singlepage')
  return (
    <div>
    <h3 style={{textAlign:"center"}}>Individual Blog </h3>
    <br/>
    <br/>
    <div style={{border:"3px solid #666",textAlign:"center",
    width:"50%",margin:"auto",borderRadius:"30px",padding:"20px"
  

  }}>
    <h2>Title: {res[0].title}</h2>
    <h4>Author: {res[0].author}</h4>
    <h1>{ReactHtmlParser(res[0].content)}</h1>
    
    </div>
    <div className='btncontainer' style={{display:"flex",marginTop:"50px",width:"100%",justifyContent:"center"}}>
    <div className='btns' style={{textAlign:"center",border:"1px dotted gold",width:"30%",height:"100%"}}>
    <h4>Author</h4>
    <button disabled={!auth} onClick={()=>handleEdit(res[0]._id)} style={{margin:"10px",width:"50px",height:"25px",borderRadius:"6px",fontWeight:"bold"}}>Edit</button>
    <button  disabled={!auth} onClick={()=>handleDelete(res[0]._id)} style={{margin:"10px",width:"60px",height:"25px",borderRadius:"6px",fontWeight:"bold"}}>Delete</button>

    </div>

    <div className='btns' style={{textAlign:"center",border:"1px dotted gold",width:"30%"}}>
    <h4>Admin</h4>
    <button disabled={!adminAuth} onClick={()=>handleAdminEdit(res[0]._id)} style={{margin:"10px",width:"50px",height:"25px",borderRadius:"6px",fontWeight:"bold"}}>Edit</button>
    <button  disabled={!adminAuth} onClick={()=>handleAdminDelete(res[0]._id)} style={{margin:"10px",width:"60px",height:"25px",borderRadius:"6px",fontWeight:"bold"}}>Delete</button>

    </div>
    
    
    
    </div>





{edit?
<Quilltext
PostData={PostData}
/>:null
}
{adminEdit?
  <Quilltext
  PostData={PostData}
  />:null

}


    
    </div>
  )
}

export default Single

export const getServerSideProps=async(context)=>{
const ID=context.query.id

const data=await fetch(`http://localhost:8080/blogs?_id=${ID}`)
const res=await data.json()
return(
  {
    props:{res}
  }
)
}