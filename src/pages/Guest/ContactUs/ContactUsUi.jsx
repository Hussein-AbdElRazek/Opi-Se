import classes from './ContactUs.module.css'
import { CurveContainer, GuestCard, HeaderTextHero, Paragraph } from '../../../components/ui'
import contactUsBG from '../../../assets/images/contactUsBG.svg'
import { Btn, FormikContainer, LoopOnInputs } from '../../../components/inputs'
import { contactUsInitialValues, contactUsInputData } from './contactusInputsData'
import { contactUsValidationSchema } from './contactUsValidationSchema'
const ContactUsUi = () =>
{
    return (
        <div >
            <div className={classes.container}>
                <HeaderTextHero >
                    Contact Us
                </HeaderTextHero>
                <Paragraph>
                    Use this form to reach out to our team regarding any questions, concerns, or feedback.
                </Paragraph>
            </div>

            <CurveContainer>
                <GuestCard>
                    <HeaderTextHero type='h2'>
                        Get in Touch
                    </HeaderTextHero>

                    <Paragraph align='left'>
                        Fill out the form bellow, and we ’ll get back to you as early as possible
                    </Paragraph>

                    <div className='br' />

                    <div className={`${classes.formParent} space-between`}>
                        <div className={classes.form}>
                            <FormikContainer
                                initialValues={contactUsInitialValues}
                                validationSchema={contactUsValidationSchema}
                                onSubmit={() => { }}
                            >
                                <LoopOnInputs
                                    inputs={contactUsInputData}
                                />
                                
                                <div className={classes.action}><Btn type="submit">Submit</Btn></div>
                            </FormikContainer>
                        </div>
                        <div className={classes.bg}><img src={contactUsBG} alt="contactUsBG" /></div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </GuestCard>
            </CurveContainer>
        </div>
    )
}

export default ContactUsUi