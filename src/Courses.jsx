import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/admin/courses", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => setCourseData(res.data.courses)) 
            .catch((error) => console.log(error));
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
 		<Box maxWidth={800}>
 			<Typography variant="h4" component="h4" align="center" gutterBottom> Courses </Typography>
 			<Grid container spacing={2} justifyContent="center">
 				{courseData.map((course) => (
 				<Grid item xs={12} sm={6} md={4} key={course.id}>
 				<Course course={course} />
 				</Grid>
 				))}
 			</Grid>
      		 </Box>
     	</Box>
    );
};
function Course({ course }) {
    const { title, description, imglink, published } = course;
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={imglink}
            title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {title} </Typography>
                <Typography variant="body2" color="text.secondary"> {description} </Typography>
                {/* <Typography variant="body2" color="text.secondary"> Price: {price} </Typography> */}
                <Typography variant="body2" color="text.secondary"> Published: {published ? "Yes" : "No"} </Typography>
            </CardContent>
        </Card>
    );
 }
