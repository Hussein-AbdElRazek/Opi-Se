import FormikContainer from '../../../components/inputs/FormikContainer';
import LoopOnInputs from '../../../components/inputs/LoopOnInputs';
import { signUpInitialValues, signUpInputs } from './signUpInputsData';
import { signUpValidationSchema } from './signUpValidationSchema';
import { FormCard } from '../../../components/ui/FormCard';
import { HeaderText, Paragraph } from '../../../components';
import Btn from '../../../components/inputs/Btn';
import TextAndLink from '../../../components/common/TextAndLink';
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