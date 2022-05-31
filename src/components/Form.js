import React from 'react';
import axios from 'axios';

const headersA = {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlcyI6W3siaWQiOiI2Mjk2NTAwYTNmM2U0NzQ3NmE1NThmZjciLCJyb2xlIjoiVVNFUiJ9XSwiaWF0IjoxNjU0MDE4MTQxLCJleHAiOjE2NTQwMjE3NDF9.cT9LUxqmNZeRnCn0Rk-ecwrVSBiZc1C7bG_jgEBVHRk'
  }

async function getData(formData) {
    try {
       let res = await axios({
        method: "post",
        url: "http://localhost:8080/api/user/uploadFile",
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
}

export const Form = () => {

const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", selectedFile);
    getData(formData);
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileSelect}/>
            <input type="submit" value="Upload File" />
        </form>
    );
  };