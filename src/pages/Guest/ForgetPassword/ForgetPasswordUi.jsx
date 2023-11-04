
import FormikContainer from '../../../components/inputs/FormikContainer';
import Input from '../../../components/inputs/Input';
import { forgetPasswordInitialValues } from './forgetPasswordData';
import { forgetPasswordValidationSchema } from './forgetPasswordValidationSchema';
import { FormCard, HeaderText, Paragraph } from '../../../components';
import Btn from '../../../components/inputs/Btn';
import TextAndLink from '../../../components/common/TextAndLink';
import { IllustrationSection } from '../../../components/ui/IllustrationSection';

const ForgetPasswordUi = (props) =>
{

    const { handleForgetPassword, isLoadingForgetPassword } = props;

    return (
        <div
            className='height-100vh center-y center-x'
        >
            <FormCard
                size="small"
            >
                <HeaderText>Forget Password</HeaderText>
                <FormikContainer
                    initialValues={forgetPasswordInitialValues}
                    validationSchema={forgetPasswordValidationSchema}
                    onSubmit={handleForgetPassword}
                >
                    <Paragraph >
                        Enter your email and we will send you a
                        password reset code
                    </Paragraph>
                    <Input
                        disabled={isLoadingForgetPassword}
                        type="email"
                        name="email"
                        label="Email" />
                    <Btn
                        disabled={isLoadingForgetPassword}
                        isLoading={isLoadingForgetPassword}
                        type="submit"
                    >
                        Send
                    </Btn>
                </FormikContainer>
                <TextAndLink type="back" />
            </FormCard>
            <IllustrationSection
                type="forgotPassword"
                size="small"
            />

        </div>


    )
}

export default ForgetPasswordUi