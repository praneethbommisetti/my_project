import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Axios } from 'axios'

export default function Admin() {
    const [name, setname]= useState([])
    const [price, setprice]= useState([])
    const [desc, setdesc]= useState([])
    const [url, seturl]= useState([])
    const api = "http://localhost:8080"
    
    const addproducts = () => {
        axios.post(api,{name:name,price:price,desc:desc,url:url})
    }
  return (
    <div>
       <p><input type ="text" onChange={(e)=>setname(e.target.value)} placeholder='name'></input> </p>
       <p><input type ="number" onChange={(e)=>setprice(e.target.value)} placeholder='price'></input> </p>
       <p><input type ="text" onChange={(e)=>setdesc(e.target.value)} placeholder='Description'></input> </p>
       <p><input type ="text" onChange={(e)=>seturl(e.target.value)} placeholder='url'></input> </p>
       
       <button onClick={addproducts}>Save</button>
    </div>
  )
}