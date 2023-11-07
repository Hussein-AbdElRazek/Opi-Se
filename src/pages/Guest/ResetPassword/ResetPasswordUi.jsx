
import { resetPasswordInitialValues, resetPasswordInputs } from './ResetPasswordData';
import { resetPasswordValidationSchema } from './ResetPasswordValidationSchema';
import { TextAndLink } from '../../../components/common';
import
{
    IllustrationSection,
    FormCard,
    HeaderText
} from '../../../components/ui';
import
{
    Btn,
    LoopOnInputs,
    FormikContainer
} from '../../../components/inputs';

const ResetPasswordUi = (props) =>
{

    const { handleResetPassword, isLoadingResetPassword } = props;

    return (
        <div
            className='height-100vh center-y center-x'
        >
            <FormCard
                size="small"
            >
                <HeaderText>Reset Password</HeaderText>
                <FormikContainer
                    initialValues={resetPasswordInitialValues}
                    validationSchema={resetPasswordValidationSchema}
                    onSubmit={handleResetPassword}
                >
                    <LoopOnInputs
                        inputs={resetPasswordInputs}
                        disabled={isLoadingResetPassword}
                    />
                    <Btn
                        disabled={isLoadingResetPassword}
                        isLoading={isLoadingResetPassword}
                        type="submit"
                    >
                        Send
                    </Btn>
                </FormikContainer>
                <TextAndLink type="back" />
            </FormCard>
            <IllustrationSection
                type="resetPassword"
                size="small"
            />
        </div>
    )
}

export default ResetPasswordUi