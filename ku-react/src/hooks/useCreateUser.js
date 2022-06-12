import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import apiUser  from '../api/apiUser';
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom';



export default function useCreateUser(users) {   
    
    const {user, setAlert} =useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()

            const createUsers=async()=>{
                
                console.log('useCreateUser createUsers: ',users)

                response = await apiUser.post(users, source.token);
                console.log('useCreateUser createUsers: ',response)
                if (response){
                
                    setAlert({msg:`User: ${users.first_name} Created`, cat:'success'})
                    console.log('register success', response)
                    navigate('/')
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    navigate('/')
                    ///redirect to the login page
                }
            }
            if(users?.first_name){
                createUsers();
            };
            return ()=>{source.cancel()}
        },[users]
    )
  
}