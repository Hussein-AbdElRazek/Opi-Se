import { Grid } from '@mui/material'
import { SideBar } from '../../../components/common/SideBar'
import { Btn, FormikContainer, LoopOnInputs } from '../../../components/inputs'
import { changePasswordInitialValues, changePasswordInputs } from './changePasswordData'
import { changePasswordValidationSchema } from './changePasswordValidationSchema'
import Card from '../EditProfile/Card'
import editProfileClasses from '../EditProfile/styles/EditProfileUi.module.css'
const ChangePasswordUi = (props) =>
{
    const {
        isLoadingChangePassword,
        handleChangePassword
    } = props;
    return (
        <Grid
            container
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
                xl={4}
                lg={4}
                md={5}
                sm={6}
                xs={10}
            >
                <FormikContainer
                    initialValues={changePasswordInitialValues}
                    validationSchema={changePasswordValidationSchema}
                    onSubmit={handleChangePassword}
                >
                    <Card
                        title="Change Password"
                    >
                        <LoopOnInputs
                            inputs={changePasswordInputs}
                            disabled={isLoadingChangePassword}
                        />
                        <div
                            className={editProfileClasses.action}
                            style={{ marginTop: "30px" }}
                        >
                            <Btn
                                type="submit"
                                isLoading={isLoadingChangePassword}
                            >
                                Update Password
                            </Btn>
                        </div>
                    </Card>
                </FormikContainer>
            </Grid>
        </Grid>
    )
}

export default ChangePasswordUi