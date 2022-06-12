import React, { useContext} from "react";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import BookCard from "../components/BookCard";
import { AppContext } from "../context/AppContext";
import Button from '@mui/material/Button';

export default function ReadingList() {
  const {cart,error, emptyCart} = useContext(AppContext)

  


  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  
  if (!cart) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  
  console.log('readinglist', cart)
  return (
    <>
    <Button key="CLEAR" justifyContent="flex-end" sx={{ mb:5, backgroundColor: "#21b6ae", justifyContent: 'center', color: "red", borderRadius: 50}} onClick={()=>{emptyCart()}}>Empty Book</Button>

      <Box sx={{ mb: 15}}>
        {[...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map((item) => (
            <BookCard key={item.id} item={item} />
          ))}
      </Box>
    </>
  );
}

