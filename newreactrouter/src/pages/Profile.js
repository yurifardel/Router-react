import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Profile( match ) {
   // const { id } = useParams();
    const navigate = useNavigate();



    return (
        <>
            
            <h1>
                Profile
                <button onClick={() => navigate('/')}>Painel</button>
                <button onClick={() => navigate('/')}>Password</button>

            </h1>
            
           
           <Outlet />
        </>

           
      
    );
}