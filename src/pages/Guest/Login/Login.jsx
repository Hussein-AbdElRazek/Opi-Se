import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginUi from './LoginUi'
import useHttp from '../../../hooks/use-http';
import { authActions } from '../../../store/auth-slice';
import { requestNotificationPermission } from '../../../FCM/FCM';
import { userModulePath } from '../../../config';
const Login = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        isLoading: isLoadingLogin,
        sendRequest: login
    } = useHttp();

    const handleLogin = async (values) =>
    {
        const deviceToken = await requestNotificationPermission();

        values.deviceToken = deviceToken;

        const getResponse = ({ message, token, data, profileDetails }) =>
        {
            if (message === "success")
            {
                dispatch(authActions.login({
                    token: token,
                    userData: { ...profileDetails, ...data }
                }))
                navigate("/", { replace: true });
            }
        };

        await login(
            {
                url: `${userModulePath}/login`,
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