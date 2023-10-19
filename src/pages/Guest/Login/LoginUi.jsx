import { Button } from '@mui/material'

import FormikContainer from '../../../components/inputs/FormikContainer'
import LoopOnInputs from '../../../components/inputs/LoopOnInputs'
import { loginInitialValues, loginInputs } from './loginInputsData'
import { loginValidationSchema } from './loginValidationSchema'
import classes from './Login.module.css'
import SignInUpQuestion from '../../../components/common/SignInUpQuestion'
import Btn from '../../../components/inputs/Btn'
const LoginUi = (props) =>
{
    const {
        handleLogin,
        isLoadingLogin,
        handleOpenForgetPassword,
    } = props;
    return (
        <div>
            <FormikContainer
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleLogin}
            >
                <LoopOnInputs inputs={loginInputs} />
                <div
                    className={classes.forgetPasswordContainer}
                >
                    <Button
                        onClick={handleOpenForgetPassword}
                        className={classes.forgetPasswordBtn}
                        variant="text"
                    >
                        Forgot your password?
                    </Button>
                </div>
                <Btn
                    type="submit"
                    isLoading={isLoadingLogin}
                >
                    Sign in
                </Btn>
                <SignInUpQuestion type="login" />
            </FormikContainer>

        </div>
    )
}

export default LoginUi