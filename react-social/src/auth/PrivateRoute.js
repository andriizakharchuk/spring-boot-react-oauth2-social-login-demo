import { Navigate, useLocation } from 'react-router-dom';
import {useAuth} from "./AuthProvider";

function PrivateRoute({ children }) {
    let { isAuthenticated } = useAuth();
    let location = useLocation();

    return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;