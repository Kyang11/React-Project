import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import useBook from '../hooks/useBook';




import { useParams } from 'react-router-dom';



export default function SingleBook() {
    const {itemId} =  useParams()
  
    const {books, error} = useBook(itemId);
    console.log('Single Book' , books)
    
    if (error) {
        return (
            <Box sx={{ display: "flex" }}>
                <Error>{error}</Error>
            </Box>
        )
    }

    if (!books) {
        console.log('There is no Book to display')

        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>

        )

    }

  

    return (
        <Card  sx={{ maxWidth: 200}}>

        
            <CardMedia
                component="img"
                height="400"
                image={books.img}
                alt={books.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {books.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {books.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {books.summary}

                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {books.pages}

                </Typography>


            </CardContent>
       
        </Card>
        
    );
}