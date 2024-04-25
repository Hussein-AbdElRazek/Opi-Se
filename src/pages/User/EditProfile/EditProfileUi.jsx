import { Btn, LoopOnInputs, Skills } from '../../../components/inputs'
import { aboutInput, editProfileInputs } from './editProfileInputsData'
import { editProfileValidationSchema } from './editProfileValidationSchema'
import classes from './styles/EditProfileUi.module.css'
import { SideBar } from '../../../components/common/SideBar'
import Card from './Card'
import { aboutInputs } from '../About/aboutInputsData'

import { Formik, Form } from 'formik'

const EditProfileUi = (props) =>
{
    const {
        initialUserData,
        isLoadingEditProfile,
        handleEditProfile
    } = props;
    return (
        <div
            className={classes.container}
        >
            <SideBar />
            <div
                className={classes.data}
            >
                <Formik
                    initialValues={initialUserData}
                    validationSchema={editProfileValidationSchema}
                    onSubmit={handleEditProfile}
                    enableReinitialize={true}
                >
                    {(formik) =>
                    {
                        return (
                            <Form>
                                <Card
                                    title="Personal Information"
                                >
                                    <LoopOnInputs
                                        inputs={editProfileInputs}
                                        disabled={isLoadingEditProfile}
                                    />

                                    <div
                                        className={classes.action}
                                    >
                                        <Btn
                                            type="submit"
                                            isLoading={isLoadingEditProfile}
                                        >
                                            Save
                                        </Btn>
                                    </div>


                                </Card>

                                <Card
                                    title="About me"
                                >
                                    <div
                                        className={classes.aboutContainer}
                                    >
                                        <LoopOnInputs
                                            inputs={aboutInput}
                                            disabled={isLoadingEditProfile}
                                        />
                                        <div className={classes.aboutLength}>{formik.values?.bio?.length || 0}/1000</div>
                                    </div>
                                    <div
                                        className={classes.action}
                                    >
                                        <Btn
                                            type="submit"
                                            isLoading={isLoadingEditProfile}
                                        >
                                            Save
                                        </Btn>
                                    </div>

                                </Card>
                            </Form>)
                    }}


                </Formik>

                <Card
                    title="Interests"
                >
                    <Formik
                        initialValues={initialUserData}
                    >
                        {(formik) =>
                        {
                            return (
                                <Form>
                                    <LoopOnInputs
                                        inputs={aboutInputs}
                                    // disabled={isLoadingEditProfile}
                                    />
                                    <Skills
                                        skillsInitial={initialUserData.userSkills}
                                        formik={formik}
                                    />

                                    <div
                                        className={classes.action}
                                    >
                                        <Btn
                                            type="submit"
                                        // isLoading={isLoadingEditProfile}
                                        >
                                            Save
                                        </Btn>
                                    </div>

                                </Form>
                            )

                        }}
                    </Formik>
                </Card>
            </div>
        </div >
    )
}

export default EditProfileUi