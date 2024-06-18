import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginUi from './LoginUi'
import useHttp from '../../../hooks/use-http';
import { authActions } from '../../../store/auth-slice';
import { requestNotificationPermission } from '../../../FCM/FCM';

const Login = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        isLoading: isLoadingLogin,
        sendRequest: login
    } = useHttp();

    const { userType } = useParams();

    const handleLogin = async (values) =>
    {
        const deviceToken = await requestNotificationPermission();

        values.deviceToken = deviceToken;

        const getResponse = ({ message, token, data, profileDetails }) =>
        {
            if (message === "success")
            {
                navigate("/", { replace: true });
                dispatch(authActions.login({
                    token: token,
                    userData: { ...profileDetails, ...data }
                }))
            }
        };

        await login(
            {
                url: `${userType}/login`,
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
            userType={userType}
        />
    )
}

export default Login