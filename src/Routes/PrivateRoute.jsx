import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner text-info"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname } to='/login'></Navigate>
};

export default PrivateRoute;