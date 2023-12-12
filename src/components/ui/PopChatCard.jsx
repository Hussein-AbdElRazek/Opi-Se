import classes from './styles/PopChatCard.module.css'

export const PopChatCard = ({ header, children }) =>
{
    return (
        <div
            className={classes.container}
        >
            {header}
            <div
                className={classes.content}
            >
                {children}
            </div>
        </div>
    )
}
