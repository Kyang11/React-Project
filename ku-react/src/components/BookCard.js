import React, { useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { AppContext } from '../context/AppContext';

export default function BookCard({item}) {
    const {addToCart, removeFromCart, error}=useContext(AppContext)


    if (error) {
        return (
            <Box sx={{ display: "flex" }}>
                <Error>{error}</Error>
            </Box>
        )
    }

    
    if (!item) {
        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>

        )

    }
    return (
        <Card  sx={{ maxWidth: 350}}>
            <CardMedia
                component="img"
                height="400"
                image={item.img}
                alt={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {item.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {item.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.summary}

                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.pages}

                </Typography>

            </CardContent>
            <CardActions sx={{}}>
                <Button sx={{}} key="add" onClick={()=>{addToCart(item)}}  size="small">Add</Button>
                <Button key="delete" onClick={()=>{removeFromCart(item)}} size="small">Remove</Button>
                
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
                </FormGroup>
            </CardActions>
        </Card>
        
    );
}

