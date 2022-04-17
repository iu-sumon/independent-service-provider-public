import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState()
    const location = useLocation()

      loading && <Loading></Loading>
     !user && <Navigate to="/login" state={{ from: location }} replace />
    return  children;
};

export default RequireAuth;