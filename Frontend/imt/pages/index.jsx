
import { useRouter } from "next/router"
import { useState } from "react"

const Landing=({res})=>{
    const route=useRouter()
    
console.log(res)

const Singlepage=(id)=>{
    console.log(id)
    route.push(`/blog/${id}`)

}
const [show,setShow]=useState(true)
const [searchData,setSearchData]=useState([])
console.log(searchData)
const [find,setFind]=useState('')



const Search=(e)=>{
    setFind(e.target.value)
}
   const SearchBtn=async()=>{
    const get=await fetch(`http://localhost:8080/blogs?title=${find}`)
    const res=await get.json()
    setSearchData(res)
    setShow(false)


   }



    return (
        <div >
        <input onChange={Search} placeholder="Search"/>
        <button onClick={SearchBtn}>Go</button>
        <h3 style={{textAlign:"center"}}>Home page</h3>
        <br/>
        <br/>
{show==true?
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",
    border:"3px solid green",width:"70%",margin:"auto"
    }}>
    
        {res?res.map((el)=>
        <div onClick={()=>Singlepage(el._id)} style={{border:"2px dotted black",margin:"auto",
        margin:"50px",textAlign:"center",borderRadius:"18px"
    
    
    
    }} key={el._id}>
        <h2>{el.title}</h2>
        <h5>{el.author}</h5>
        
        </div>
    
    
    ):<h1>Loading</h1>}
    
    </div>:

    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",
border:"3px solid green",width:"70%",margin:"auto"
}}>

    {searchData?searchData.map((el)=>
    <div onClick={()=>Singlepage(el._id)} style={{border:"2px dotted black",margin:"auto",
    margin:"50px",textAlign:"center",borderRadius:"18px"



}} key={el._id}>
    <h2>{el.title}</h2>
    <h5>{el.author}</h5>
    
    </div>


):<h1>Loading</h1>}

</div>


}
        
        
        </div>
    )
}

export const getServerSideProps=async()=>{
const data=await fetch('http://localhost:8080/blogs')
const res=await data.json()

return(
    {
        props:{res}
    }
)

}
 

export default Landing