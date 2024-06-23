import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import ResetPasswordUi from "./ResetPasswordUi"
import { useSnackbar } from "notistack";
import { mentorModulePath, userModulePath } from "../../../config";
import { useSelector } from "react-redux";

const ResetPassword = (props) =>
{
    const {
        isLoading: isLoadingResetPassword,
        sendRequest: resetPassword
    } = useHttp();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const role = useSelector(state => state.auth.userData.role);

    const handleResetPassword = (values) =>
    {
        const token = new createSearchParams(searchParams).get("token");
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Password changed successfully", { variant: "success" })
                navigate("/login")
            }
        };

        resetPassword(
            {
                url: `${role === 'user' ? userModulePath : mentorModulePath}/submitNewPassword?token=${token}`,
                method: "POST",
                body: values,
            },
            getResponse
        );
    }

    return (
        <ResetPasswordUi
            handleResetPassword={handleResetPassword}
            isLoadingResetPassword={isLoadingResetPassword}
        />
    )
}

export default ResetPassword