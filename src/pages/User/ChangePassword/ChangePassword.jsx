import ChangePasswordUi from './ChangePasswordUi'
import useHttp from '../../../hooks/use-http';
import { useSnackbar } from 'notistack';
import { mentorModulePath, userModulePath } from '../../../config';
import { useSelector } from 'react-redux';

const ChangePassword = () =>
{
    const {
        isLoading: isLoadingChangePassword,
        sendRequest: changePassword
    } = useHttp();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const role = useSelector(state => state.auth.userData.role);

    const handleChangePassword = (values, {resetForm}) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Your password changed successfully", { variant: "success" })
                resetForm();
            }
        };
        changePassword(
            {
                url: `${role === 'user' ? userModulePath : mentorModulePath}/changePassword`,
                method: "POST",
                body: values,
            },
            getResponse
        );
    }

    return (
        <ChangePasswordUi
            handleChangePassword={handleChangePassword}
            isLoadingChangePassword={isLoadingChangePassword}
        />
    )
}

export default ChangePassword