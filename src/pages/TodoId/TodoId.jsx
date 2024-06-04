import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TodoId = () => {
    const {id} = useParams()
    const [image,setImage] = useState(null)
    
    const [data, setData] = useState([]);
    const Api = "http://65.108.148.136:8080/ToDo";
    const ImageApi = "http://65.108.148.136:8080/images";
const getId = async () =>{
    try{
      let {data} = await axios.get( `${Api}/get-to-do-by-id?id=${id}`)
    
      setData(data.data)
    }
    catch(error){
      console.error(error);
    }
  }
  console.log(data);
  useEffect(()=>{
    getId()
  },[id])
        
//   const handleimg =  (event) =>{
//     console.log(event);
//       setImage(event.file)
//       setBase64(event.base64)
//   }

const [open,setOpen] = useState(false)
const [open2,setOpen2] = useState(false)

const [deleteid,setDeleteid] = useState(null)

const openModal = (imageId)=>{
    setDeleteid(imageId)
    setOpen(true)
  }

  const openModal2 = ()=>{

    setOpen2(true)
  }

  const toDelete = async () =>{
    try{
        const {data} = await axios.delete(`${Api}/delete-to-do-image?imageId=${deleteid}`)
        getId()
        closeModal()
    }
    catch(error){
        console.error(error);
    }
  }

  const closeModal = () => {
    setOpen(false);
  };

  const closeModal2 = () => {
    setOpen2(false);
  };

  const editUser = async (values) => {
    try {
      await axios.put(`${Api}/update-to-do`, { id, ...values });
      getId();
      closeModal2();
    } catch (error) {
      console.error(error);
    }
  };


                                                                                                                
  return (
    <div>
         

         <div className='text-[40px] font-[600]'>{data.name}</div>
         <div className='text-[40px] font-[600]'>{data.description}</div>
       

        {
              data?.images?.map((e)=>{ 
                return(
                    <div key={e.id}>

                     <img className='w-[500px]' src={`${ImageApi}/${e.imageName}`}  alt="" />
                     <button className='w-[150px] h-[50px] bg-slate-400 rounded-3xl mt-[20px] mb-[20px]' onClick={()=>openModal(e.id)}>Delete</button>
                     <button className="w-[150px] bg-slate-400 h-[50px] rounded-3xl" onClick={()=> openModal2()}>Edit</button>  
                    </div>)
              })
              
            }
            


<Dialog className="bg-slate-400"
           open={open}
           onClose={closeModal}
            >
                 <label htmlFor="">Image</label>
                    <button type="submit"  onClick={()=>toDelete()}>Delete</button>  
                  

                <button onClick={()=> closeModal()}>close</button>
            </Dialog>

            <Dialog open={open2} onClose={closeModal2}>
      
        <DialogContent>

            
        
          <Formik
            initialValues={{
              Name: data.name || "",
              Description: data.description || "",
            }}
           
            onSubmit={(values) => {
                editUser(values)
              }}
          >
            {({ errors, touched }) => (
              <Form className="grid gap-4">
                <div>
                  <label htmlFor="Name">Name</label>
                  <Field
                    name="Name"
                    id="Name"
                    placeholder="Name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.Name && touched.Name ? (
                    <div className="text-red-600">{errors.Name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="Description">Description</label>
                  <Field
                    name="Description"
                    id="Description"
                    placeholder="Description"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.Description && touched.Description ? (
                    <div className="text-red-600">{errors.Description}</div>
                  ) : null}
                </div>
                <DialogActions>
                  <Button onClick={closeModal2} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>

       
       
        </div>
  )
}

export default TodoId