import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import ForgetPasswordUi from "./ForgetPasswordUi"

const ForgetPassword = (props) =>
{
    const {
        isLoading: isLoadingForgetPassword,
        sendRequest: forgetPassword
    } = useHttp();
    const navigate = useNavigate();
    const handleForgetPassword = (values) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                navigate("login")
            }
        };

        forgetPassword(
            {
                url: "forgetPassword",
                method: "post",
                body: values,
            },
            getResponse
        );
    }

    return (
        <ForgetPasswordUi
            handleForgetPassword={handleForgetPassword}
            isLoadingForgetPassword={isLoadingForgetPassword}
        />
    )
}

export default ForgetPassword