import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useBook from '../hooks/useBook'
import { CircularProgress } from '@mui/material';
import Error from './Error';
import BookBrowser from './BookBrowser'
import Box from '@mui/material/Box';


export default function Bookfilter() {
    
      const [label, setLabel] = useState(null)
      const {books, error} = useBook();
  
      let subjects = [];

      if (error){
        return (
          <Box sx={{display:"flex"}}>
            <Error>{error}</Error>
          </Box>
        )
      }

      if(!books){
        return(
        <Box sx={{display:"flex"}}>
          <CircularProgress/>
        </Box>
    
        )
    
      }
  
  if (books){
    const getBookSubjects = ()=>{ 
        
      books.forEach((item)=> subjects.push(item.subject)) 
      subjects = [...new Set(subjects)]
      
    }
  
  getBookSubjects()

  }

  return (
    <>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={subjects}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Subject" />}
      onChange={(option,value,selectOption) => setLabel(value)}
      />
      <BookBrowser filterBy={label} />
    </>
  );
}



