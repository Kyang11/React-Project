import './App.css';
import NavBar from './components/NavBar';
import SnackBar from './components/SnackBar';
import Box from '@mui/material/Box'
import {Route, Routes} from 'react-router-dom'
import Logout from './views/Logout';
import Login from './views/Login';
import ReadingListView from './views/ReadingView'
import RegisterAndEdit from './views/EditProfile'
import SubjectFilter from './views/SubjectFilter'
import SingleBook from './views/SingleBook'

const HomePage=()=>{return(<h1>Welcome to the Library</h1>)}


function App() {

  return (
    <>
      <SnackBar/>
      <NavBar>
        <Box sx={{minHeight:'90vh'}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ReadingList" element={<ReadingListView/>}/>
            <Route path="/Browse" element={<SubjectFilter/>}/>
            <Route path="/Register" element={<RegisterAndEdit/>}/>
            <Route path="/SingleBook/:itemId" element={<SingleBook/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </Box>
      </NavBar>
    </>
  );
}

export default App;
