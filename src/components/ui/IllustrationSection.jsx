import loginBackground from '../../assets/images/loginBackground.png'
import { HeaderText, Paragraph } from '../'
import classes from './styles/IllustrationSection.module.css'

export const IllustrationSection = ({ type }) =>
{
    return (
        <div
            className={`
                ${classes.default}
                ${type !== "login" && classes.background}
            `}
        >
            {type === "login" && (
                <>
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
                </>
            )}
        </div>
    )
}
