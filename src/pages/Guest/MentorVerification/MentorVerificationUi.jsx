import OTPInput from 'react-otp-input';
import { FormCard, HeaderText, IllustrationSection, Paragraph } from '../../../components/ui'
import { Btn } from '../../../components/inputs'
import inputClasses from '../../../components/inputs/styles/Input.module.css'
import errClasses from '../../../components/inputs/styles/InputError.module.css'
import classes from './MentorVerificationUi.module.css'
import { LoadingButton } from '@mui/lab';

const MentorVerificationUi = (props) =>
{
    const {
        OTP,
        setOTP,
        handleVerification,
        isLoadingVerification,
        handleResendOTP,
        isLoadingResendOTP,
        isResendDisabled,
        disableResendCodeTime,
        OTPError,
    } = props;

    return (
        <div
            className='height-100vh center-y center-x'
        >
            <FormCard
                size="small"
            >
                <HeaderText>Email Verification</HeaderText>
                <Paragraph >
                    Please type OTP code that given you
                </Paragraph>
                <div className={`${classes.OTPParent}`}>
                    <div className={`${errClasses.errorText}`}>{OTPError}</div>
                    <div className={`${inputClasses.input} ${classes.OTPContainer} ${OTPError ? errClasses.formError : ''}`}>
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            numInputs={4}
                            renderInput={(props) => <input   {...props} disabled={isLoadingVerification} />}
                        />
                    </div>
                    <div className={classes.resendOTP}>
                        <Paragraph >
                            Don’t receive code?
                            <LoadingButton
                                onClick={handleResendOTP}
                                loading={isLoadingResendOTP}
                                disabled={isLoadingResendOTP || isResendDisabled}
                            >
                                Resend
                            </LoadingButton>
                            {isResendDisabled &&
                                <span className={classes.resendOTPTime}>
                                    {`(${disableResendCodeTime})`}
                                </span>}
                        </Paragraph>
                    </div>
                </div>

                {/* {!!error && <InputError>{error}</InputError>} */}
                <Btn
                    onClick={handleVerification}
                    isLoading={isLoadingVerification}
                >
                    Verify
                </Btn>
            </FormCard>

            <IllustrationSection
                type="mentorVerification"
                size="small"
            />

        </div>
    )
}

export default MentorVerificationUi