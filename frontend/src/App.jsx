import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Textarea } from "@mui/joy"; 
import axios from 'axios';
import { formControlClasses } from '@mui/material';




function App () {
  const [selected, setSelected] = React.useState(false);
  const [form, setForm] = useState({
    title : '',
    post : "",
  });
  
  const handleChange=(e)=>{
    const formData={...form,[e.target.name]: e.target.value}
     setForm(formData)
  }

  const handlePost=async()=>{
    const response =  await axios.post('http://localhost:3005/api',form)
  }


  return (
    <>
     <div className="flex flex-col justify-center items-center h-screen   ">
       <div className='flex flex-col gap-5 items-center justify-center w-96 h-96 bg-yellow-400 shadow-2xl '>

        <h1 className='text-xl font-semibold'>Post your thoughts</h1>
        <TextField id="standard-basic" label="Title" variant="standard"v name='title' onChange={handleChange} />
        <div className='w-[30vh] '>

        <Textarea placeholder="Write a post" size='lg' onChange={handleChange} name="post" />
        </div>
        <Button variant="contained" onClick={handlePost} className="hover:bg-yellow-500 " InputProps={{ className: "hover:bg-yellow-500  " }}>post</Button>
        
       </div>
       
       
     </div>
    </>
  )
}

export default App
