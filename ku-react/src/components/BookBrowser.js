import React, { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import BookmarkAddSharpIcon from "@mui/icons-material/BookmarkAddSharp";
import useBook from "../hooks/useBook";
import Box from "@mui/material/Box";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import { AppContext } from "../context/AppContext";
import {useNavigate} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';


export default function BookBrowser(filterBy) {
  const { books, error } = useBook();

  const {addToCart, setAlert} = useContext(AppContext)
  const navigate = useNavigate()

  const handleAddToCart=(book)=>{
    addToCart(book)
    setAlert(`You added ${book.title} to your cart list`)
    console.log("addToCart", book)
  }



  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  console.log("all Book Browser", filterBy);

  
  if (!books) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

 

  if (filterBy.filterBy !== null ) {
    let bookList = [];

    console.log("allBookBrowser", filterBy);
 
    bookList = books.filter((book) => book.subject === filterBy.filterBy);
    console.log("bookList: ", bookList);
    return (
      <ImageList cols={3}>


        {bookList.map((book) => (

            
          <ImageListItem key={book.id}>
            <img
              src={`${book.img}`}
              srcSet={`${book.img}`}
              alt={book.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={book.title}
              subtitle={book.author}
              actionIcon={<>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${book.title}`}
                  onClick={()=>{handleAddToCart(book)}}
                  
                >
                  <BookmarkAddSharpIcon />

                </IconButton>
                 <IconButton
                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                 aria-label={`info about ${book.title}`}
                 onClick={()=>navigate('/SingleBook/'+book.id)}
               >
                 <InfoIcon />
               </IconButton>
               </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <ImageList cols={3}>
      {books.map((book) => (
        <ImageListItem key={book.id}>
          <img
            src={`${book.img}`}
            srcSet={`${book.img}`}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={book.author}
            actionIcon={<>
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${book.title}`}
                onClick={()=>{handleAddToCart(book)}}
              >
                <BookmarkAddSharpIcon />
              </IconButton>
              <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${book.title}`}
              onClick={()=>navigate('/SingleBook/'+book.id)}
            >
              <InfoIcon />
            </IconButton>
            </> }
          />
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}









