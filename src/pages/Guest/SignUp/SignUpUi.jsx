import { signUpInitialValues, signUpInputs } from './signUpInputsData';
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

const SignUpUi = (props) =>
{
  const { handleSignUp, isLoadingSignUp } = props;
  return (
    <div
      className='center-x'
    >
      <FormCard
        size="big"
      >
        <HeaderText>
          Sign Up
        </HeaderText>
        <Paragraph>
          Connect with a study buddy today
        </Paragraph>
        <Formik
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUp}
        >
          {(formik) =>
            <Form >
              <LoopOnInputs
                inputs={signUpInputs}
                disabled={isLoadingSignUp} />
              <Btn
                type="submit"
                variant="contained"
                isLoading={isLoadingSignUp}
                fullWidth
              >
                Sign Up
              </Btn>
            </Form>
          }
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