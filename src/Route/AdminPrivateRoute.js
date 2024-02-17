import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {

   
    const getlocalStorageItem = () =>{
        let userId = localStorage.getItem("gffex_admin_ID");
        if(userId){
            return JSON.parse(userId);
        }else{
    // console.log("is ok")
    
            return null;
        }
    
    }
      const adminData = getlocalStorageItem();
      const [data, setData] = useState([]);
    
        useEffect(() => {
            if(adminData?._id){
                fetch(`https://gffex.xyz/api/admin/role/view/${adminData?._id}`, {
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
    if(!token || !data ){
        return <Navigate to='/' sate={{from:location}} replace ></Navigate>
        
    }else{
        if(token){
            return children;
        }else{
            <Navigate to='*' sate={{from:location}} replace></Navigate>
        }
    }

  
    
}

export default AdminPrivateRoute;