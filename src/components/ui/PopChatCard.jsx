import UploadMedia from '../chat/UploadMedia'
import classes from './styles/PopChatCard.module.css'

export const PopChatCard = ({ header, children, inputBar, type, chatId, handleUploadMedia, isLoadingUploadMedia, closeMenu, }) =>
{
    return (
        <div
            className={`
                ${classes.container} 
            `}
        >
            <div style={{ position: "relative" }}>
                {header}
                <div
                    className={`
                    ${classes.chatContainer} 
                    ${!!inputBar ? classes.paddingBottom : ""}
            `}
                >
                    <div
                        className={`
                    ${classes.content} 
                    ${type === "mediaPage" ? classes.mediaPage : ""}
                `}
                    >
                        {children}
                    </div>
                </div>
                {inputBar && (
                    <div
                        className={classes.inputBarContainer}
                    >
                        {inputBar}
                    </div>
                )}
                {inputBar && (<UploadMedia
                    name={chatId}
                    handleUploadMedia={handleUploadMedia}
                    isLoadingUploadMedia={isLoadingUploadMedia}
                    closeMenu={closeMenu}
                    flag={true}
                />)}
            </div>

        </div>
    )
}
