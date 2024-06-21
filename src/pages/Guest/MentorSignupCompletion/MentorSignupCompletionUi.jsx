import { Formik, Form } from 'formik'

import Navbar from './components/Navbar'
import ActionsContainer from './components/ActionsContainer'
import { Btn, LoopOnInputs, OutlinedBtn, Skills } from '../../../components/inputs'
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrowRight.svg'
import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrowLeft.svg'
import { aboutInputs } from '../../User/About/aboutInputsData'
import { HeaderText } from '../../../components/ui'
import Layout from './components/Layout'
import StepTitle from './components/StepTitle'
import { signupCompletionValidationSchema } from './inputsData/signupCompletionValidationSchema'

const MentorSignupCompletionUi = ({ onSubmit, initialValues }) =>
{
    return (
        <div>
            <Navbar />
            <Formik
                initialValues={initialValues}
                validationSchema={signupCompletionValidationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <Form>
                        <Layout >
                            <StepTitle step={1} />

                            <HeaderText>
                                Complete your academic and skills details to enhance your
                                Study Partner experience !
                            </HeaderText>

                            {/* FORM Inputs */}
                            <div>
                                <LoopOnInputs
                                    inputs={aboutInputs}
                                />
                                <Skills formik={formik} name='skills' />
                            </div>

                            <ActionsContainer>
                                <Btn
                                    size="small"
                                    endIcon={
                                        <ArrowRightIcon
                                            fill={'var(--primary)'}
                                        />}
                                    type="submit"
                                >
                                    Next
                                </Btn>
                                <OutlinedBtn
                                    size="small"
                                    startIcon={
                                        <ArrowLeftIcon
                                            fill={'var(--secondary)'}
                                        />}
                                    to={'/mentor/signup/'}
                                >
                                    Back
                                </OutlinedBtn>
                            </ActionsContainer>
                        </Layout >
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default MentorSignupCompletionUi