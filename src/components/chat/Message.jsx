import { isArabic } from '../../helpers/isArabic'
import { OptionsMenu } from './OptionsMenu';
import classes from './styles/Message.module.css'

export const Message = ({ children, date, type, seen, id }) =>
{
    const isTextArabic = isArabic(children ? children[0] : "");
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
                    style={{
                        textAlign: isTextArabic ? "right" : "left"
                    }}
                >
                    {type === "sent" && <OptionsMenu messageId={id}  />}
                    {children}
                </div>
                <span
                className={classes.date}
                >
                    {date}
                </span>
            </div>
            {/* Seen SVG */}
            {(seen && type === "sent") && (
                <svg className={classes.seen} xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path d="M1 3.99967L3.69474 6.66634L9.53333 1.33301" stroke="#0573F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )}
        </div>
    )
}
