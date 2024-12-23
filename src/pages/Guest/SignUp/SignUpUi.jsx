import { signUpInputs } from './signUpInputsData';
import { signUpValidationSchema } from './signUpValidationSchema';
import { TextAndLink } from '../../../components/common';
import
{
    IllustrationSection,
    HeaderText,
    Paragraph,
    FormCard
} from '../../../components/ui';
import
{
    Btn,
    LoopOnInputs,
} from '../../../components/inputs';

import { Form, Formik } from 'formik';
import { Outlet } from 'react-router-dom';
import ExtractNationalId from './ExtractNationalId';

const SignUpUi = (props) =>
{
    const { userType, handleSignUp, isLoadingSignUp, signupInitialValues } = props;
    return (
        <div
            className='center-x'
        >
            <FormCard
                size="big"
                isSignUp={true}
            >
                <HeaderText>
                    Sign Up
                </HeaderText>
                <Paragraph>
                    Connect with a study buddy today
                </Paragraph>
                <Formik
                    initialValues={signupInitialValues}
                    validationSchema={signUpValidationSchema}
                    onSubmit={handleSignUp}
                >
                    {(formik) =>
                        <Form >
                            <LoopOnInputs
                                inputs={signUpInputs}
                                formik={formik}
                                disabled={isLoadingSignUp}
                            />
                            <ExtractNationalId
                                error={formik.errors?.nationalId && formik.touched?.nationalId}
                                setFieldValue={formik.setFieldValue}
                                isHaveInitialData={!!signupInitialValues.nationalId}
                            />
                            <Btn
                                type="submit"
                                variant="contained"
                                isLoading={isLoadingSignUp}
                                fullWidth
                            >
                                {userType === "user" ? 'Sign Up' : 'Continue'}
                            </Btn>
                        </Form>}
                </Formik>
                <TextAndLink
                    type="signup"
                />
            </FormCard >
            <IllustrationSection
                type="signup"
                size="small"
            />
            <Outlet />
        </div>
    )
}

export default SignUpUi