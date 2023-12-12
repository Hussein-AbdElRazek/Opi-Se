import classes from './styles/MessageRepliedOn.module.css'

export const MessageRepliedOn = (props) =>
{
    const { replyOn, type, children } = props;
    return (
        <div
            className={`
                    ${classes.container} 
                    ${type === "sent" ? classes.containerSent : ""}
                `}
        >
            <span
                className={`
                    ${classes.pip} 
                    ${type === "sent" ? classes.pipSent : ""}
                `}
            />
            <div
                className={`
                        ${classes.content}  
                        ${type === "sent" ? classes.contentSent : ""}
                `}
            >
                <span
                    className={`
                        ${classes.replyOn}  
                        ${type === "sent" ? classes.replyOnSent : ""}
                `}
                >
                    {replyOn}
                </span>
                {children}
            </div>

        </div>
    )
}
