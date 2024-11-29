import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function Contain() {
  const [products, setProducts]= useState([])
  //const [id, setid]= useState([])
  // const url ='mongodb+srv://praneethbommisetti0:tGz6NXeeuvOSP302@cluster0.dqouh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  const url="http://localhost:8080"
  
  const getdata = async() =>{
    const response = await axios.get(url)
    setProducts(response.data)
  }

  const deleteproducts = async(id) => {
    await   axios.delete(url+id);
    getdata();
  }
  useEffect(()=>{
    getdata()
  },[])
  // const products = [
  //   {name: "product 1", price: 35 , url:"https://picsum.photos/id/1/200/300"},
  //   {name: "product 2", price: 45, url:"https://picsum.photos/id/2/200/300"},
  //   {name: "product 3", price: 45, url:"https://picsum.photos/id/3/200/300"}
  // ]
  return (
    <div style={{display : "flex", justifyContent:"center", flexWrap:'wrap'}}>
        {products.map((value,index) => (
          <div style={{background: "blue", margin:"10px", padding:"center"}}>
          <img src={value.url}></img>
          <h2> {value.name}</h2>
          <h3>{value.price}</h3>
          <button>buy</button>
          <button onClick={() => deleteproducts(value._id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}