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
                xs={5}
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