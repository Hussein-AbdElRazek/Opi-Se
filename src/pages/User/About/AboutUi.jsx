import { Form, Formik } from 'formik';

import
{
    HeaderText,
    FormCard,
} from '../../../components/ui';
import
{
    Btn,
    LoopOnInputs,
    Skills,
} from '../../../components/inputs';
import { aboutInitialValues, aboutInputs } from './aboutInputsData';
import { aboutValidationSchema } from './aboutValidationSchema';
import arrowRightIcon from '../../../assets/icons/arrowRight.svg'
import classes from './About.module.css'

const AboutUi = (props) =>
{
    const {
        handleNavigateToQuestions,
        isCompleteAboutData,
        initialAboutData
    } = props;
    return (
        <div
            className='center-x height-100vh'
        >
            <Formik
                initialValues={
                    isCompleteAboutData ?
                        initialAboutData :
                        aboutInitialValues
                }
                validationSchema={aboutValidationSchema}
                onSubmit={handleNavigateToQuestions}
            >
                {(formik) => (
                    <Form>
                        <FormCard
                            size="full"
                            action={
                                <Btn
                                    size="small"
                                    endIcon={<img src={arrowRightIcon} alt="arrow right" />}
                                    type="submit"
                                >
                                    Next
                                </Btn>
                            }
                        >
                            <HeaderText>
                                Complete your academic and skills details to enhance your
                                Study Partner experience !
                            </HeaderText>

                            {/* FORM Inputs */}
                            <div
                                className={classes.form}
                            >
                                <LoopOnInputs
                                    inputs={aboutInputs}
                                />
                                <Skills formik={formik} />
                            </div>
                        </FormCard >
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AboutUi