
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
import { aboutInitialValues, aboutInputs } from './aboutInputsData';
import { aboutValidationSchema } from './aboutValidationSchema';
import { useNavigate } from 'react-router-dom';

const About = (props) =>
{
    const navigate = useNavigate();
    return (
        <div
            className='center-x height-100vh'
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
                    initialValues={aboutInitialValues}
                // validationSchema={aboutValidationSchema}
                // onSubmit={handleSignUp}
                >
                    <LoopOnInputs
                        inputs={aboutInputs}
                    // disabled={}
                    />
                    <Btn
                        type="submit"
                        onClick={() => navigate("/questions")}
                    // loading={}
                    >
                        Continue
                    </Btn>

                </FormikContainer>
            </FormCard >
            <IllustrationSection
                type="signup"
                size="small"
            />
        </div>
    )
}

export default About