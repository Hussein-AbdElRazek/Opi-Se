import React, { useState } from 'react'
import ResendEmailUi from './ResendEmailUi'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import { useSnackbar } from 'notistack';
import { userModulePath } from '../../../config';

const ResendEmail = () =>
{
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { userType } = useParams();
    const email = searchParams.get('email');
    const {
        isLoading: isLoadingResendEmail,
        sendRequest: resendEmail
    } = useHttp();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const [sentAgain, setSentAgain] = useState(false)

    const onCloseModal = () =>
    {
        setIsModalOpen(false)
        navigate(`/${userType}/login`)
    }

    const handleResendEmail = () =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Email sent successfully", { variant: "success" })
                if (!sentAgain) setSentAgain(true)
            }
        };

        resendEmail(
            {
                url: `${userModulePath}/resendVerificationEmail?email=${email}`,
                method: "GET",
            },
            getResponse
        );
    }
    
    return (
        <ResendEmailUi
            isModalOpen={isModalOpen}
            onCloseModal={onCloseModal}
            email={email}
            handleResendEmail={handleResendEmail}
            isLoadingResendEmail={isLoadingResendEmail}
            sentAgain={sentAgain}
        />
    )
}

export default ResendEmail