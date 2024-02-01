import { IconButton, InputBase } from '@mui/material'
import classes from './styles/InputBar.module.css'
import { Field, Form, Formik } from 'formik'
import { getTypingDirection } from '../../helpers/getTypingDirection'
import UploadMedia from './UploadMedia'
import { useSearchParams } from 'react-router-dom'

export const InputBar = (props) =>
{
    const { submitTextMessage, handleUploadMedia, isLoadingUploadMedia } = props;

    const [searchParams] = useSearchParams();
    const chatId = searchParams.get("id");

    return (
        <Formik
            initialValues={{ message: "" }}
            onSubmit={submitTextMessage}
        >
            {(formik) => (
                <Form>
                    <div
                        className={classes.container}
                    >
                        <UploadMedia
                            name={chatId}
                            handleUploadMedia={handleUploadMedia}
                            isLoadingUploadMedia={isLoadingUploadMedia}
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
                                {/* Camera IconButton */}
                                <IconButton>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 6V6.75C7.25076 6.75 7.48494 6.62467 7.62404 6.41603L7 6ZM8.40627 3.8906L7.78223 3.47457V3.47457L8.40627 3.8906ZM15.5937 3.8906L16.2178 3.47457L15.5937 3.8906ZM17 6L16.376 6.41603C16.5151 6.62467 16.7492 6.75 17 6.75V6ZM14.25 13.5C14.25 14.7426 13.2426 15.75 12 15.75V17.25C14.0711 17.25 15.75 15.5711 15.75 13.5H14.25ZM12 15.75C10.7574 15.75 9.75 14.7426 9.75 13.5H8.25C8.25 15.5711 9.92893 17.25 12 17.25V15.75ZM9.75 13.5C9.75 12.2574 10.7574 11.25 12 11.25V9.75C9.92893 9.75 8.25 11.4289 8.25 13.5H9.75ZM12 11.25C13.2426 11.25 14.25 12.2574 14.25 13.5H15.75C15.75 11.4289 14.0711 9.75 12 9.75V11.25ZM7.62404 6.41603L9.0303 4.30662L7.78223 3.47457L6.37596 5.58397L7.62404 6.41603ZM10.0704 3.75H13.9296V2.25H10.0704V3.75ZM14.9697 4.30662L16.376 6.41603L17.624 5.58397L16.2178 3.47457L14.9697 4.30662ZM13.9296 3.75C14.3476 3.75 14.7379 3.95888 14.9697 4.30662L16.2178 3.47457C15.7077 2.70953 14.8491 2.25 13.9296 2.25V3.75ZM9.0303 4.30662C9.26214 3.95888 9.65243 3.75 10.0704 3.75V2.25C9.1509 2.25 8.29226 2.70953 7.78223 3.47457L9.0303 4.30662ZM21.25 10V17H22.75V10H21.25ZM18 20.25H6V21.75H18V20.25ZM2.75 17V10H1.25V17H2.75ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 6.75C19.7949 6.75 21.25 8.20507 21.25 10H22.75C22.75 7.37665 20.6234 5.25 18 5.25V6.75ZM6 5.25C3.37665 5.25 1.25 7.37665 1.25 10H2.75C2.75 8.20507 4.20507 6.75 6 6.75V5.25ZM6 6.75H7V5.25H6V6.75ZM18 5.25H17V6.75H18V5.25Z" fill="#000E08" fillOpacity="0.5" />
                                        <circle cx="12" cy="6" r="1" fill="#000E08" fillOpacity="0.5" />
                                    </svg>
                                </IconButton>
                                {/* Record IconButton */}
                                <IconButton>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 11V12C19 15.866 15.866 19 12 19M5 11V12C5 15.866 8.13401 19 12 19M12 19V22M12 22H15M12 22H9M12 16C9.79086 16 8 14.2091 8 12V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V12C16 14.2091 14.2091 16 12 16Z" stroke="#000E08" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </IconButton>
                            </>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    )
}