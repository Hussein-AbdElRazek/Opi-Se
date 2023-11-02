import { Button, Divider } from '@mui/material'

import FormikContainer from '../../../components/inputs/FormikContainer'
import LoopOnInputs from '../../../components/inputs/LoopOnInputs'
import { loginInitialValues, loginInputs } from './loginInputsData'
import { loginValidationSchema } from './loginValidationSchema'
import classes from './Login.module.css'
import SignInUpQuestion from '../../../components/common/SignInUpQuestion'
import Btn from '../../../components/inputs/Btn'
import LoginWithSocial from '../../../components/loginWithSocial/LoginWithSocial'

import
{
    Paragraph,
    HeaderText,
    Logo,
    FormCard
} from '../../../components';
import { IllustrationSection } from '../../../components/ui/IllustrationSection'
const LoginUi = (props) =>
{
    const {
        handleLogin,
        isLoadingLogin,
        handleOpenForgetPassword,
    } = props;
    return (
        <div
            className={classes.login}
        >
            <div
                className='center-y'
            >
                <FormCard
                    size="small"
                >
                    <Logo />
                    <HeaderText>
                        Login
                    </HeaderText>
                    <Paragraph>
                        Please, Enter your details
                    </Paragraph>
                    <FormikContainer
                        initialValues={loginInitialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleLogin}
                    >
                        <LoopOnInputs
                            inputs={loginInputs}
                            disabled={isLoadingLogin}
                        />
                        <div
                            className={classes.forgetPasswordContainer}
                        >
                            <Button
                                onClick={handleOpenForgetPassword}
                                className={classes.forgetPasswordBtn}
                                variant="text"
                            >
                                Forgot password?
                            </Button>
                        </div>
                        <Btn
                            type="submit"
                            isLoading={isLoadingLogin}
                        >
                            Login
                        </Btn>
                        <Divider className={classes.divider}>Or</Divider>
                        <SignInUpQuestion type="login" />
                        <LoginWithSocial />
                    </FormikContainer>
                </FormCard>
            </div>

            <IllustrationSection
                type="login"
                size="big"
            />
        </div >
    )
}

export default LoginUi