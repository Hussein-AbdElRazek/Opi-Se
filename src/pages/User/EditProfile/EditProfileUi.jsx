import { Btn, LoopOnInputs, Skills } from '../../../components/inputs'
import { aboutInput, editProfileInputs } from './editProfileInputsData'
import { editProfileValidationSchema } from './editProfileValidationSchema'
import classes from './styles/EditProfileUi.module.css'
import { SideBar } from '../../../components/common/SideBar'
import Card from './Card'
import { aboutInputs } from '../About/aboutInputsData'

import { Formik, Form } from 'formik'
import { aboutValidationSchema } from '../About/aboutValidationSchema'
import { ProfileList } from '../../../components/common'

const EditProfileUi = (props) =>
{
    const {
        initialUserData,
        isLoadingEditProfile,
        handleEditProfile,
        initialUserPrefers,
        isLoadingEditUserPrefers,
        handleEditUserPrefers,
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
                                        formik={formik}
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
                        initialValues={initialUserPrefers}
                        onSubmit={handleEditUserPrefers}
                        validationSchema={aboutValidationSchema}
                        enableReinitialize={true}
                    >
                        {(formik) =>
                        {
                            return (
                                <Form>
                                    <LoopOnInputs
                                        inputs={aboutInputs}
                                        disabled={isLoadingEditUserPrefers}
                                    />

                                    {isLoadingEditUserPrefers && <br />}
                                    <Skills
                                        name={initialUserData.role === 'user' ? 'userSkills' : 'skills'}
                                        skillsInitial={initialUserData.role === 'user'
                                            ? initialUserPrefers.userSkills : initialUserPrefers.skills}
                                        formik={formik}
                                        disabled={isLoadingEditUserPrefers}
                                    />

                                    <div
                                        className={classes.action}
                                    >
                                        <Btn
                                            type="submit"
                                            isLoading={isLoadingEditUserPrefers}
                                        >
                                            Save
                                        </Btn>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </Card>

                {/* <Card
                    title="Experience"
                >
                    <ProfileList list={[
                        {title:"UI/UX Designer",
                        text:"SYNC - Full-time", 
                        secText:"Aug 2022 - Present"},
                        {title:"UI/UX Designer",
                        text:"SYNC - Full-time", 
                        secText:"Aug 2022 - Present"},
                        ]}/>
                </Card> */}
            </div>
        </div >
    )
}

export default EditProfileUi