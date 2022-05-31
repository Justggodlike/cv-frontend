import React from 'react';
import axios from 'axios';

// const Form = () => {
//   const [selectedFile, setSelectedFile] = React.useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const formData = new FormData();
//     formData.append("selectedFile", selectedFile);
//     try {
//       const response = await axios({
//         method: "post",
//         url: "/api/upload/file",
//         data: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//     } catch(error) {
//       console.log(error)
//     }
//   }

//   const handleFileSelect = (event) => {
//     setSelectedFile(event.target.files[0])
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileSelect}/>
//       <input type="submit" value="Upload File" />
//     </form>
//   )
// };

// export default Form;

async function getData(formData) {
    try {
       let res = await axios({
        method: "post",
        url: "http://localhost:8080/api/user/uploadFile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        })
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status)
            console.log(res.data)
        }    
        // Don't forget to return something   
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
    // try {
    //   const response = axios({
    //     method: "post",
    //     url: "http://localhost:8080/api/user/uploadFile",
    //     data: formData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   console.log(response.data);
    // } catch(error) {
    //   console.log(error)
    // }
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