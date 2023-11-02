import FormikContainer from '../../../components/inputs/FormikContainer';
import LoopOnInputs from '../../../components/inputs/LoopOnInputs';
import { signUpInitialValues, signUpInputs } from './signUpInputsData';
import { signUpValidationSchema } from './signUpValidationSchema';
import { FormCard } from '../../../components/ui/FormCard';
import { HeaderText, Paragraph } from '../../../components';
import Btn from '../../../components/inputs/Btn';
import SignInUpQuestion from '../../../components/common/SignInUpQuestion';
import { IllustrationSection } from '../../../components/ui/IllustrationSection';

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
        <FormikContainer
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUp}
        >
          <LoopOnInputs
            inputs={signUpInputs}
            disabled={isLoadingSignUp} />
          <Btn
            type="submit"
            variant="contained"
            loading={isLoadingSignUp}
            fullWidth
          >
            Sign Up
          </Btn>
          <SignInUpQuestion
            type="signup"
            size="small" 
            />
        </FormikContainer>
      </FormCard >
      <IllustrationSection type="signup" />
    </div>
  )
}

export default SignUpUi