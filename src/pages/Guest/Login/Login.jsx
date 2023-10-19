import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginUi from './LoginUi'
import useHttp from '../../../hooks/use-http';
import ForgetPassword from '../../../components/forgetPassword/ForgetPassword';
import { authActions } from '../../../store/auth-slice';
const Login = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        isLoading: isLoadingLogin,
        sendRequest: login
    } = useHttp();

    const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);
    const handleLogin = (values) =>
    {
        const getResponse = ({ message, token, data }) =>
        {
            if (message === "success")
            {
                dispatch(authActions.login({ token: token, userData: data }))
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
    const handleOpenForgetPassword = () =>
    {
        setIsForgetPasswordOpen(true);
    }
    return (
        <>
            <LoginUi
                handleLogin={handleLogin}
                isLoadingLogin={isLoadingLogin}
                handleOpenForgetPassword={handleOpenForgetPassword}
            />
            <ForgetPassword open={isForgetPasswordOpen} setOpen={setIsForgetPasswordOpen} />
        </>

    )
}

export default Login