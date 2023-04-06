
import { useMemo, useState ,useRef} from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css'
//import '@vueup/vue-quill/dist/vue-quill.snow.css';




const Quilltext=({PostData})=>{
    //console.log(handleChange,'kk')
    
   
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[])

    const [value,setVAlue]=useState('')
   console.log(value)

   const obj={
    title:"",
    author:"",
    content:""
   }
  
   
   const [data,setData]=useState(obj)
    const handleChange=(value)=>{
        setVAlue(value)
        data.content=value
        
    }
   
    const handleGet=(e)=>{
        setData({...data,[e.target.title]:e.target.value})
        
       
        
    }
    // const [post,setPost]=useState()
    //console.log(post)
    const Post=()=>{
        //data.content=value
       PostData(data)
       
       setData(obj)
       setVAlue('')
        
    }


    return(
        <div style={{border:"2px solid #999",margin:"auto",width:"50%",display:"flex"
    ,flexDirection:"column",alignItems:"center",paddingBottom:"50px",borderRadius:"8px",marginTop:"50px"}}>
    <h2>Blogs </h2>   
    <br/>
       <br/>
       <br/>
       <div className="subContainer" style={{border:"2px solid #666",borderRadius:"10px",padding:"15px",width:"62%",}}>
       <div style={{width:"97%"}}>
       <h1  style={{
           fontFamily:"serif",fontSize:"17px",fontWeight:"initial"
           
                   }}>Title </h1>
                   <input
                   required
                   title="title"
                   value={data.title}
                   onChange={handleGet}
                   style={{marginTop:"-10px",width:"100%",height:"25px",border:"1.5px solid #999"}}
                   placeholder="Title"/>
       
       </div>
       <br/>
       <div style={{marginTop:"-10px",width:"97%"}}>
       <h1  style={{
           fontFamily:"serif",fontSize:"17px",fontWeight:"initial"
           
                   }}>Author </h1>
                   <input
                   required
                   title="author"
                   value={data.author}
                   onChange={handleGet}
                   style={{marginTop:"-10px",width:"100%",height:"25px",border:"1.5px solid #999"}}
                   placeholder="Author Name"/>
       
       </div>
       <br/>
       
       <div style={{marginTop:"-10px",width:"97%",height:"100%"}}>
       <h1  style={{
        
        fontFamily:"serif",fontSize:"17px",fontWeight:"initial"}}>Content</h1>

      
       <ReactQuill theme="snow"
      
       value={value}
       title="content"
       required
     
      
      
      onChange={handleChange}
      />
       
       </div>
       <input
       
        type='file' placeholder="upload Image"/>
        <br/>
        <br/>
       <div style={{margin:"20px 0px 0px 0px" ,width:"35%",margin:"auto"}} className="btn">
       <button style={{fontWeight:"bold",textAlign:"center" ,width:"100%",height:"30px",border:"1px solid #999",borderRadius:"5px"}} onClick={Post}>Post</button>

       </div>
       </div>
    
        
        </div>
    )
}
export default Quilltext