import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const headersA = {
    'Content-Type': 'multipart/form-data'
  }

  function RouteChange() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }
    routeChange();
  }

async function getData(formData) {
    try {
       let res = await axios({
        method: "post",
        url: "http://localhost:8080/api/message/create",
        data: formData,
        headers: headersA,
        })
        if(res.status == 200){
            console.log(res.status)
            console.log(res.data)
        }     
        return res.data
    }
    catch (err) {
        console.error(err);
    }
    RouteChange();
}

export const Form = (id) => {

const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    // const idO = id.id;
    const title = localStorage.getItem('title');
    const desc = localStorage.getItem('desc');
    formData.append("id", id.id);
    formData.append("title", title);
    formData.append("desc", desc);
    // const messageCreateDto = {title, desc, idO}
    // formData.append("messageCreateDto", messageCreateDto)
    formData.append("file", selectedFile);
    localStorage.removeItem('title');
    localStorage.removeItem('desc');
    getData(formData);
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    localStorage.setItem(name, value);
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  
    return (
      <div>
                <Box
            sx={{
                width: 0,
                height: 100,
                backgroundColor: 'white',
                '&:hover': {
                backgroundColor: 'white',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
        <div className='form'>
        <label className='input'>
            title 
            <input
            className='input'
            name="title"
            type="text"
            onChange={handleInputChange} />
        </label>
        <Box
            sx={{
                width: 0,
                height: 10,
                backgroundColor: 'white',
                '&:hover': {
                backgroundColor: 'white',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
        <br />
        <label className='input'>
            desc
            <textarea name="body"
            className='input desc'
            name="desc"
            type="text"
            onChange={handleInputChange}/>
        </label>
        <Box
            sx={{
                width: 0,
                height: 10,
                backgroundColor: 'white',
                '&:hover': {
                backgroundColor: 'white',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
        <br />
            <input type="file" onChange={handleFileSelect}/>
            <Box
            sx={{
                width: 0,
                height: 10,
                backgroundColor: 'white',
                '&:hover': {
                backgroundColor: 'white',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
            <button onClick={handleSubmit}> Отправить </button>
        </div>
      </div>
    );
  };