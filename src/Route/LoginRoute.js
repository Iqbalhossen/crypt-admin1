import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const LoginRoute = ({children}) => {

    const getlocalStorageItem = () =>{
        let userId = localStorage.getItem("gffex_admin_ID");
        if(userId){
            return JSON.parse(userId);
        }else{    
            return null;
        }
    
    }
      const adminData = getlocalStorageItem();
      const [data, setData] = useState([]);
    
        useEffect(() => {
            if(adminData?._id){
                fetch(`http://66.29.142.198:5000/api/admin/role/view/${adminData?._id}`, {
                    method: 'GET',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data.data)
                    })
            }   
        }, [])

    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
      }

      
    const location = useLocation();
    let token = getCookie('gffex_admin_token');
    console.log(token)

    if(!token || !data){
        return children;
        
    }
    else if(token){
        return <Navigate to='/admin/dashboard' state={{from:location}} replace ></Navigate>

    }
 
   

  
   
}

export default LoginRoute;