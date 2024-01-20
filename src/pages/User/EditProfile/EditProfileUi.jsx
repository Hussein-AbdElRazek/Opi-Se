import React from 'react'
import { SideBar } from '../../../components/common/SideBar'
import Card from './Card'
import { Btn, FormikContainer, LoopOnInputs, Skills } from '../../../components/inputs'
import { editProfileInputs } from './editProfileInputsData'
import { editProfileValidationSchema } from './editProfileValidationSchema'
import { Grid } from '@mui/material'
import { aboutInitialValues, aboutInputs } from '../About/aboutInputsData'
import { aboutValidationSchema } from '../About/aboutValidationSchema'
import classes from './styles/EditProfileUi.module.css'
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
                row
            >
                <Grid
                    item
                    xs={2.5}
                >
                    <SideBar />
                </Grid>
                <Grid
                    item
                    xs={9.5}
                ><FormikContainer
                    initialValues={initialUserData}
                    validationSchema={editProfileValidationSchema}
                    onSubmit={handleEditProfile}
                >
                        <Card
                            title="Personal Information"
                        >
                            <LoopOnInputs
                                inputs={editProfileInputs}
                                disabled={isLoadingEditProfile}
                            />
                        </Card>
                        <Card
                            title="Interests"
                        >
                            <LoopOnInputs
                                inputs={aboutInputs}
                            // disabled={isLoadingEditProfile}
                            />
                            <Skills />
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
                    </FormikContainer>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditProfileUi