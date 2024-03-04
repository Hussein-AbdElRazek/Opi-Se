import classes from './styles/PopChatCard.module.css'

export const PopChatCard = ({ header, children, inputBar, type }) =>
{
    return (
        <div
            className={classes.container}
        >
            {header}
            
            <div
                className={`
                    ${classes.content} 
                    ${type === "mediaPage" ? classes.mediaPage : ""}
                    ${inputBar ? classes.paddingBottom : ""}
                `}
            >
                {children}
            </div>

            {inputBar && (
                <div
                    className={classes.inputBarContainer}
                >
                    {inputBar}
                </div>
            )}
        </div>
    )
}
