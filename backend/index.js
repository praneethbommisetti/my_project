import express from "express";
import cors from "cors"
import { MongoClient,ObjectId } from "mongodb";

//const uri="mongodb://127.0.0.1:27017"
const uri="mongodb+srv://praneethbommisetti0:tGz6NXeeuvOSP302@cluster0.dqouh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new MongoClient(uri)
const db=client.db("ecomml")
const app = express()
app.use(express.json());
app.use(cors())
app.listen(8080,()=>{
    console.log("Server started at Port 8080")
})
app.get("/", async (req,res)=>{
    const items = await db.collection("products").find().toArray()
    res.status(200).json(items);
})
app.post("/", async (req, res) => {
    const { name, price } = req.body;
    const data = {
      name: name,
      price: price,
    };
    const newProduct = await db.collection("products").insertOne(data);
    res.status(200).json(newProduct);
});
  
  
app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const newProduct = await db.collection("products").deleteOne({_id:new ObjectId(id)});
    res.status(200).json(newProduct);
});
// app.get("/home",(req,res)=>{
//     res.send("Welcome Home")
// })
// app.get("/name",(req,res)=>{
//     res.send("Praneeth")
// })
