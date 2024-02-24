import { getTypingDirection } from '../../helpers/getTypingDirection'
import { OptionsMenu } from './OptionsMenu';
import classes from './styles/Message.module.css'

export const Message = ({ children, date, type, messageType, seen, id }) =>
{
    const textDirection = getTypingDirection(children && messageType === "text" ? children : "");

    return (
        <div
            className={`
                        ${classes.containerBasics}
                        ${type === "sent" ? classes.sentContainer : classes.receiveContainer}
                `}
        >
            <div>
                <div
                    className={`
                    ${classes.messageBasics}
                    ${type === "sent" ? classes.sentMessage : classes.receiveMessage}
                `}
                    style={{ direction: textDirection }}
                >
                    {type === "sent" && <OptionsMenu messageId={id} />}
                    {children}
                </div>
                <span
                    className={classes.date}
                >
                    {date}
                </span>
            </div>
        </div>
    )
}
