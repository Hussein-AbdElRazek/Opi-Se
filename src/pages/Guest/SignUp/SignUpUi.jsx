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
  FormikContainer
} from '../../../components/inputs';

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
          <TextAndLink
            type="signup"
          />
        </FormikContainer>
      </FormCard >
      <IllustrationSection
        type="signup"
        size="small"
      />
    </div>
  )
}

export default SignUpUi