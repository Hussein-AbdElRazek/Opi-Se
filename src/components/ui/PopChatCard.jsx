import classes from './styles/PopChatCard.module.css'

export const PopChatCard = ({ header, children, inputBar }) =>
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
            {inputBar}
        </div>
    )
}
