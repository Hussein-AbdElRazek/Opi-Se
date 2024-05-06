import { IconButton, InputBase } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Field, Form, Formik } from 'formik'

import classes from './styles/InputBar.module.css'
import { getTypingDirection } from '../../helpers/getTypingDirection'
import UploadMedia from './UploadMedia'
import { useSearchParams } from 'react-router-dom'
import { PopUpMenu } from '../common'
import { ReactComponent as AttachmentIcon } from '../../assets/icons/attachment.svg'
import { uiActions } from '../../store/ui-slice'
import { Poll } from './Poll'

export const InputBar = (props) =>
{
    const { submitTextMessage, handleUploadMedia, isLoadingUploadMedia, submitPollMessage } = props;

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const chatId = searchParams.get("id");
    const menuId = "chatMenu";
    const closeMenu = () => { dispatch(uiActions.closePopMenu(menuId)) };
    const menuItems = [
        {
            component:
                <UploadMedia
                    name={chatId}
                    handleUploadMedia={handleUploadMedia}
                    isLoadingUploadMedia={isLoadingUploadMedia}
                    closeMenu={closeMenu}
                    flag={false}
                />
            ,
        },
        {
            component: <Poll closeMenu={closeMenu} submitPollMessage={submitPollMessage} />
        },
    ]
    return (
        <>
        <Formik
            initialValues={{ message: "" }}
            onSubmit={submitTextMessage}
        >
            {(formik) => (
                <Form>
                    <div
                        className={classes.container}
                    >
                        <PopUpMenu
                            id={menuId}
                            openBtnType="icon"
                            openBtnChild={
                                <AttachmentIcon />
                            }
                            menuItems={menuItems}
                            containerClassName={classes.popContainer}
                        />
                        <Field
                            name="message"
                        >
                            {({ field }) => (
                                <InputBase
                                    className={`${classes.textInput} ${classes.marginRight}`}
                                    name="message"
                                    id="message"
                                    placeholder="Write your message"
                                    {...field}
                                    // multiline={true}
                                    // maxRows={3}
                                    // minRows={1}
                                    // maxRows={5}
                                    style={{
                                        direction:
                                            getTypingDirection(formik.values.message)
                                    }}
                                />
                            )}
                        </Field>
                        {/* Submit icon */}
                        {formik.values.message.trim() !== "" ? (
                            <IconButton
                                type="submit"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_45_770)">
                                        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#036666" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_45_770">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </IconButton>
                        ) : (
                            <>
                                {/* Record IconButton */}
                                {/* <IconButton>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 11V12C19 15.866 15.866 19 12 19M5 11V12C5 15.866 8.13401 19 12 19M12 19V22M12 22H15M12 22H9M12 16C9.79086 16 8 14.2091 8 12V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V12C16 14.2091 14.2091 16 12 16Z" stroke="#000E08" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </IconButton> */}
                            </>
                        )}
                    </div>
                </Form>
            )}
        </Formik></>
    )
}