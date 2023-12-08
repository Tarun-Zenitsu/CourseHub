// import React, { useEffect, useState } from 'react'
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Card } from '@mui/material';
// import axios from 'axios';

// const AddCourse = () => {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [imglink, setImgeLink] = useState("");
//     const handelAddCourse = () => {
//         const formData = {title, description, imglink, published: true}
//         axios.post("http://localhost:3000/admin/courses",formData, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': "Bearer "+ localStorage.getItem("token")
//             }
//         }).
//         then((res) => console.log(res.data)).catch((error) => console.log(error));
//         // setTitle("");
//         // setDescription("");
//         // setImgeLink("");
//         useEffect(() => {
//             // This effect runs after each render
//             // You can use it to perform side effects, such as updating the DOM
//             // In this case, we are clearing the input fields after the API call is completed
//             setTitle("");
//             setDescription("");
//             setImgeLink("");
//         }, [title, description, imglink]);
//     }
//   return (
//     <div>
//          <h1 style={{display: "flex", alignItems: 'center', justifyContent: "center", paddingTop: "100px"}}>welcome to corsera, Add Courses</h1>
//         <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         paddingTop={"10px"}
//         // minHeight="100vh" // Set a minimum height to ensure the centering is visible
//         >
//         <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', flexDirection: 'column' }}>
//             <TextField id="outlined-basic" label="Title" variant="outlined" type="text" 
//             onChange={(e) => setTitle(e.target.value)}
//             />
//             <TextField id="outlined-basic" label="Description" variant="outlined" type="text" 
//             onChange={(e) => setDescription(e.target.value)}
//             />
//             <TextField id="outlined-password-input" label="ImgLink" type="text" 
//             onChange={(e) => setImgeLink(e.target.value)}
//             />
//             <Button variant="contained" onClick={handelAddCourse}>SignUp</Button>
//             </div>
//         </Card>
//         </Box>
//     </div>
//   )
// }

// export default AddCourse


//------------------------------This is the updated code-------------------------------//

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import axios from 'axios';

const AddCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imglink: '',
    });

    const handelAddCourse = () => {
        axios.post("http://localhost:3000/admin/courses", { ...formData, published: true }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res.data);
                // Data has been successfully posted, now we can reset the form data
                setFormData({
                    title: '',
                    description: '',
                    imglink: '',
                });
            })
            .catch((error) => console.log(error));
            alert('Course was added successfully!')
    }

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    return (
        <div>
            <h1 style={{ display: "flex", alignItems: 'center', justifyContent: "center", paddingTop: "100px" }}>Welcome to Corsera, Add Courses</h1>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingTop={"10px"}
            >
                <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', flexDirection: 'column' }}>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            type="text"
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="ImgLink"
                            type="text"
                            value={formData.imglink}
                            onChange={(e) => handleChange('imglink', e.target.value)}
                        />
                        <Button variant="contained" onClick={handelAddCourse}>SignUp</Button>
                    </div>
                </Card>
            </Box>
        </div>
    );
}

export default AddCourse;
