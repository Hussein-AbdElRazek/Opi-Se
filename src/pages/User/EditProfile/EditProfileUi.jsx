import { Grid } from '@mui/material'

import { Btn, LoopOnInputs } from '../../../components/inputs'
import { editProfileInputs } from './editProfileInputsData'
import { editProfileValidationSchema } from './editProfileValidationSchema'
import classes from './styles/EditProfileUi.module.css'
import { SideBar } from '../../../components/common/SideBar'
import Card from './Card'
import { Formik, Form } from 'formik'
const EditProfileUi = (props) =>
{
    const {
        initialUserData,
        isLoadingEditProfile,
        handleEditProfile
    } = props;
    return (
        <div>
            <Grid
                container
                className={classes.container}
                columnSpacing={{
                    xs: 2,
                    sm: 2,
                    md: 0,
                    lg: 1,
                    xl: 1
                }}
            >
                <Grid
                    item
                    md={2.5}
                    sm={1.5}
                    xs={2}
                >
                    <SideBar />
                </Grid>
                <Grid
                    item
                    md={9.5}
                    sm={10.5}
                    xs={10}
                >
                    <Formik
                        initialValues={initialUserData}
                        validationSchema={editProfileValidationSchema}
                        onSubmit={handleEditProfile}
                        enableReinitialize={true}
                    >
                        {(formik) =>
                            <Form >
                                <Card
                                    title="Personal Information"
                                >
                                    <LoopOnInputs
                                        inputs={editProfileInputs}
                                        disabled={isLoadingEditProfile}
                                    />
                                </Card>
                                <div
                                    className={classes.action}
                                >
                                    <Btn
                                        type="submit"
                                        isLoading={isLoadingEditProfile}
                                    >
                                        Save All Data
                                    </Btn>
                                </div>
                            </Form>
                        }

                    </Formik>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditProfileUi