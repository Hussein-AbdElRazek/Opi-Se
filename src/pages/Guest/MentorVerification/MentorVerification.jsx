import React, { useCallback, useEffect, useState } from 'react'
import MentorVerificationUi from './MentorVerificationUi'
import useHttp from '../../../hooks/use-http';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { mentorModulePath } from '../../../config';
import { useDispatch } from 'react-redux';
import { signupMentorActions } from '../../../store/signup-mentor-slice';
import { signUpInitialValues } from '../SignUp/signUpInputsData';

const MentorVerification = () =>
{
    const {
        isLoading: isLoadingVerification,
        sendRequest: verification
    } = useHttp();
    const {
        isLoading: isLoadingResendOTP,
        sendRequest: resendOTP
    } = useHttp();
    const navigate = useNavigate();
    const { enqueueSnackbar: popMessage } = useSnackbar();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [OTP, setOTP] = useState('');
    const [isResendDisabled, setIsResendOTPDisabled] = useState(true); // Initially disabled
    const [coolDownTime, setCoolDownTime] = useState(30); // Initial cool down in seconds
    const [OTPError, setOTPError] = useState();

    const handleVerification = useCallback(() =>
    {
        if (OTP.length < 4)
        {
            setOTPError('Invalid verification code')
            return
        }

        setOTPError('')

        const getResponse = async ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("Your account verified successfully", { variant: "success" })
                navigate(`/mentor/login`)
                setTimeout(() =>
                {
                    dispatch(
                        signupMentorActions.updateData(
                            { userData: signUpInitialValues, lastSignupStep: -1 }
                        ))
                }, 1000)
            }
        };

        const submitData = {
            email: searchParams.get("email"),
            otpCode: OTP
        }

        verification(
            {
                url: `${mentorModulePath}/verifyAccount`,
                method: "PATCH",
                body: submitData,
            },
            getResponse
        );
    }, [OTP, dispatch, navigate, popMessage, searchParams, verification])

    const handleResendOTP = () =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                popMessage("OTP send successfully", { variant: "success" })
                setIsResendOTPDisabled(true);
                setCoolDownTime(30); // Reset cool down time to 30 seconds
            }
        };

        resendOTP(
            {
                url: `${mentorModulePath}/resendOTP?email=${searchParams.get("email")}`,
            },
            getResponse
        );
    }

    useEffect(() =>
    {
        if (OTP.length === 4)
        {
            handleVerification()
        }
    }, [OTP.length, handleVerification])

    useEffect(() =>
    {
        let timerId;

        if (isResendDisabled && coolDownTime > 0)
        {
            timerId = setTimeout(() =>
            {
                setCoolDownTime(coolDownTime - 1);
            }, 1000); // Update every second
        }
        else if (isResendDisabled && coolDownTime === 0)
        {
            // Enable button when cool down reaches 0
            setIsResendOTPDisabled(false);
        }
        return () => clearTimeout(timerId);
    }, [coolDownTime, isResendDisabled]);

    const formatDisableResendCodeTime = (seconds) =>
    {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(1, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const disableResendCodeTime = formatDisableResendCodeTime(coolDownTime);
    return (
        <MentorVerificationUi
            handleVerification={handleVerification}
            isLoadingVerification={isLoadingVerification}
            OTP={OTP}
            setOTP={setOTP}
            handleResendOTP={handleResendOTP}
            isLoadingResendOTP={isLoadingResendOTP}
            isResendDisabled={isResendDisabled}
            disableResendCodeTime={disableResendCodeTime}
            OTPError={OTPError}
        />
    )
}

export default MentorVerification