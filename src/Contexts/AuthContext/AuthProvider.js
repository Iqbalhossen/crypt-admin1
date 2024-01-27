import React, { createContext, useState, useEffect } from 'react';
const getlocalStorageItem = () =>{
    let userId = localStorage.getItem("gffex_admin_ID");
    if(userId){      
        return JSON.parse(userId);
    }else{
        return null;
    }

}
 
export const AuthContext = createContext('');

const AuthProvider = ({children}) => {
    const [authId, setAuthId] = useState(getlocalStorageItem());
    const [authUser, setAuthUser] = useState({});
    const {isLoading, setLoading} = useState(false);
    const LoginWithEmail = (data) =>{    
        setAuthId(data);
        // console.log("context api : ", data);
    }
    useEffect(() => {
        if(authId?._id){
            fetch(`http://localhost:5000/api/admin/role/view/${authId?._id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setAuthUser(data.data)
                })
        }   
    }, [])
      
    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
      }
      let token = getCookie('gffex_token');

    const authInfo = {authUser, LoginWithEmail, isLoading, setLoading, setAuthUser, token, authId};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;