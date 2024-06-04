
import { useEffect, useState } from "react";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import FileBase64 from "react-file-base64";
import { Button, Dialog, DialogActions } from "@mui/material";

import React from 'react'
import { Link } from "react-router-dom";
import { Input } from "postcss";

const Todo = () => {
    
    const Api = "http://65.108.148.136:8080/ToDo";
const ImageApi = "http://65.108.148.136:8080/images";

const [data, setData] = useState([]);
const [name, setName] = useState("");
const [desc, setDesc] = useState("");
const [Image, setImage] = useState(null);
const [base64,setBase64] = useState(null)
let [idx, setIdx] = useState(null)

const getData = async () =>{
  try{
    let {data} = await axios.get( `${Api}/get-to-dos`)
    console.log(data.data);
    setData(data.data)
  }
  catch(error){
    console.error(error);
  }
}
      
const handleimg =  (event) =>{
  console.log(event);
    setImage(event.file)
    setBase64(event.base64)
}

const addtodo = async (values,  { resetForm }) =>{

      let formData = new FormData()
      for (let name in values){
        formData.append(name,values[name])
      }
      formData.append("Images",Image)
      try{
        let {data} = await axios.post(`${Api}/add-to-do`,
          formData,
          "Content-Type: multipart/form-data"
        )
        getData()
        setImage(null)
        resetForm();

      }
      catch(error){
        console.error(error);
      }

    }

    const AddImg = async (values) =>{
        let formData = new FormData()
        formData.append("Images",Image)
        formData.append('ToDoId', idx)
        try{
          let {data} = await axios.post(`${Api}/add-to-do-images `, formData,
          'Content-Type: multipart/form-data')
         
          getData()
          setImage(null)
          closeModal()
        }
        catch(error){
          console.error(error);
        }
    }

   
    
    const Delete =async (id) =>{
      try{
        let {data} = await axios.delete(`${Api}/delete-to-do?id=${id}`)
        getData()
      }
      catch(error){
        console.error(error);
      }
    }

    const [open,setOpen] = useState(false)


    const openModal = ()=>{
      setOpen(true)
    }

    const closeModal = () => {
      setOpen(false);
    };

    const [search, setSearch] = useState("")


    
const filteredData = data.filter((item) =>{
  item.name.toLowerCase().includes(search.toLowerCase())
})


    useEffect(() =>{
      getData()
    } , [])

  return (
    <div >

      
 {/* <Input
        type="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

{filteredData.map((item) => (
          <div className="p-6 border rounded-lg shadow-lg bg-white" key={item.id}>
            <h1 className="text-xl font-bold mb-2">{item.name}</h1>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <button className="mb-4 text-blue-500 underline">
              <Link to={`/contact/todo/${item.id}1`}>About</Link>
            </button>
            <div className="grid grid-cols-2 gap-4">
              {item.images.map((el) => (
                <img
                  key={el.id}
                  src={`${ImageApi}/${el.imageName}`}
                  alt={Image `${el.id}`}
                  className="w-full h-auto object-cover rounded"
                />
              ))}
            </div>
          </div>
        ))} */}

      <Formik
                initialValues={{
                  Name:"",
                  Description:""
                }}
                onSubmit={addtodo}
                >
                  <Form>
                    <label htmlFor="">Name</label>
                    <Field name="Name" id="Name" placeholder="Name">
                    </Field>

                    <label htmlFor="">description</label>
                    <Field  name="Description" id="Description" placeholder="desc">
                    </Field>
                <label htmlFor="">Image</label>
                  <FileBase64 onDone={handleimg}/>
                    <button type="submit"  className="w-[150px] h-[50px] bg-slate-400 rounded-3xl mt-[20px]">add</button>    
                    <img src={base64} className="w-[300px]" alt="" />             
                  </Form>

                </Formik>


                <div className="flex  flex-wrap  justify-around items-center pt-[50px]">
                {
                  data.map((e)=>{
                    return(

                      <div className="flex gap-5 border p-2 my-2 text-[20px]  flex-wrap items-center w-[600px] h-[300px] rounded-3xl bg-slate-300" key={e.id}>
            <p>{e.name}</p>
            <p>{e.description}</p>
         { 
              e.images.map((e)=>{ 
                return(
                  <img className="w-[250px]" src={`${ImageApi}/${e.imageName}`} key={e.id} alt="" />
                )
                
              })
              
            }
            <button onClick={()=>Delete(e.id)} className="w-[150px] h-[50px] bg-slate-400 rounded-3xl"> Delete</button>
            <button onClick={()=> {openModal(), setIdx(e.id)}} className="w-[150px] bg-slate-400 h-[50px] rounded-3xl">addImg</button>

            <Dialog className="bg-slate-400"
           open={open}
           onClose={closeModal}
            >
                 <label htmlFor="">Image</label>
                  <FileBase64 onDone={handleimg}/>
                    <button type="submit"  onClick={()=>AddImg()}>Add Image</button>    
                    <img src={base64} alt="" />

                <button onClick={()=> closeModal()}>close</button>
            </Dialog>

            <Link className="w-[150px] h-[50px] rounded-3xl bg-slate-400 flex flex-wrap justify-center items-center" to={`/TodoId/${e.id}`}>About</Link>
  

            </div>
                    )}
                )
                }
                
                </div>


               
                    
       
    </div>
  )
}

export default Todo