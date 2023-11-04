import { HeaderText, Paragraph } from '../'
import classes from './styles/IllustrationSection.module.css'
import loginBackground from '../../assets/images/loginBackground.png'
import signupBackground from '../../assets/images/signupBackground.png'
import forgotPassword from '../../assets/images/forgotPasswordBackground.png'
export const IllustrationSection = ({ type, size }) =>
{
    return (
        <div
            className={`
                ${classes.default}
                ${type !== "login" && classes.background}
                ${size === "big" ? classes.big : classes.small}
            `}
            style={{
                backgroundImage:
                    type === "signup" ?
                        `url(${signupBackground})` :
                        type === "forgotPassword" ?
                            `url(${forgotPassword})` :
                            null
            }}
        >
            {type === "login" && (
                <div>
                    <div
                        className={classes.text}
                    >
                        <HeaderText

                        >
                            Welcome Back To, LoGo
                        </HeaderText>
                        <Paragraph>
                            Login now for exclusive access!
                        </Paragraph>
                    </div>
                    <div
                        className={`
                            ${classes.login} 
                            center-text
                        `}
                    >
                        <img src={loginBackground} alt='loginBackground' />
                    </div>
                </div>
            )}
        </div >
    )
}
