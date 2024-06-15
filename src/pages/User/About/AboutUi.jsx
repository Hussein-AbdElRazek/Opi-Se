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
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrowRight.svg'
import classes from './About.module.css'

const AboutUi = (props) =>
{
    const {
        handleSubmitUserPrefers,
        isLoadingSubmitUserPrefers,
    } = props;

    return (
        <div
            className='center-x height-100vh'
        >
            <Formik
                initialValues={aboutInitialValues}
                validationSchema={aboutValidationSchema}
                onSubmit={handleSubmitUserPrefers}
            >
                {(formik) => (
                    <Form>
                        <FormCard
                            size="full"
                            action={
                                <Btn
                                    size="small"
                                    endIcon={
                                        <ArrowRightIcon
                                            fill={isLoadingSubmitUserPrefers ?
                                                'transparent' : 'var(--primary)'}
                                        />}
                                    type="submit"
                                    isLoading={isLoadingSubmitUserPrefers}
                                >
                                    Submit
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
                                    disabled={isLoadingSubmitUserPrefers}
                                />
                                {isLoadingSubmitUserPrefers && <br />}
                                <Skills formik={formik} disabled={isLoadingSubmitUserPrefers} />
                            </div>
                        </FormCard >
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AboutUi