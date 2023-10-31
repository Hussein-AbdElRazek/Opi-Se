import { Button } from '@mui/material'

import classes from './LoginWithSocial.module.css'
import googleIcon from '../../assets/icons/google.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
const LoginWithSocialUi = () =>
{
    return (
        <div
            className={classes.container}
        >
            <Button
                variant='outlined'
                fullWidth
                startIcon={<img src={googleIcon} alt="google icon"/>}
            >
                Sign in with Google
            </Button>
            <Button
                variant='outlined'
                fullWidth
                startIcon={<img src={facebookIcon} alt="facebook icon" />}

            >
                Sign in with Facebook
            </Button>
        </div>
    )
}

export default LoginWithSocialUi