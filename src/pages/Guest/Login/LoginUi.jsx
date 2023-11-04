import { Divider } from '@mui/material'

import FormikContainer from '../../../components/inputs/FormikContainer'
import LoopOnInputs from '../../../components/inputs/LoopOnInputs'
import { loginInitialValues, loginInputs } from './loginInputsData'
import { loginValidationSchema } from './loginValidationSchema'
import classes from './Login.module.css'
import TextAndLink from '../../../components/common/TextAndLink'
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
import { Link } from 'react-router-dom'
const LoginUi = (props) =>
{
    const {
        handleLogin,
        isLoadingLogin,
    } = props;
    return (
        <div
            className='height-100vh  center-y center-x'
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
                        <Link
                            to="/forgot-password"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Btn
                        type="submit"
                        isLoading={isLoadingLogin}
                    >
                        Login
                    </Btn>
                    <Divider className={classes.divider}>Or</Divider>
                    <TextAndLink type="login" />
                    <LoginWithSocial />
                </FormikContainer>
            </FormCard>
            <IllustrationSection
                type="login"
                size="big"
            />
        </div>
    )
}

export default LoginUi