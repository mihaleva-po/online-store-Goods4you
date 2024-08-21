import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext.tsx';
import {useCurrentAuthUserQuery} from '../../redux/services/currentAuthUser.ts';
import Loading from '../../components/loading/loading.tsx';

const ProtectedRoute = () => {
    const {user, setUser} = useAuth();
    const navigate = useNavigate();

    const {data: fetchedUser, isLoading, isError} = useCurrentAuthUserQuery(undefined);

    useEffect(() => {
        if (!isLoading && !isError) {
            if (!fetchedUser) {
                navigate('/login');
            } else if (!user) {
                setUser(fetchedUser);
            }
        } else if (isError) {
            navigate('/login');
        }
    }, [isLoading, isError, fetchedUser, navigate, setUser, user]);


    if (isLoading) {
        return <Loading/>;
    }


    return <Outlet/>;
};

export default ProtectedRoute;
