import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginUi from './LoginUi'
import useHttp from '../../../hooks/use-http';
import { authActions } from '../../../store/auth-slice';
const Login = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        isLoading: isLoadingLogin,
        sendRequest: login
    } = useHttp();

    const handleLogin = (values) =>
    {
        const getResponse = ({ message, token, data, profileDetails }) =>
        {
            if (message === "success")
            {
                dispatch(authActions.login({ token: token, userData: { ...data, ...profileDetails } }))
                navigate("/", { replace: true });
            }
        };

        login(
            {
                url: "login",
                method: "post",
                body: values,
            },
            getResponse
        );
    }

    return (
            <LoginUi
                handleLogin={handleLogin}
                isLoadingLogin={isLoadingLogin}
            />
    )
}

export default Login