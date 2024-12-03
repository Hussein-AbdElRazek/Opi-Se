import { LoadingButton } from '@mui/lab'
import ImageUploading from 'react-images-uploading';
import { ErrorMessage, } from "formik";

import { Input, InputError } from '../../../components/inputs'
import { ReactComponent as UploadIcon } from '../../../assets/icons/upload.svg'
import inputClasses from '../../../components/inputs/styles/Input.module.css'
import classes from './ExtractNationalId.module.css'
import errorClasses from '../../../components/inputs/styles/InputError.module.css'


const ExtractNationalIdUi = (props) =>
{
    const {
        isLoadingExtractID,
        showNationalId,
        onChangeImage,
        images,
        error,
    } = props;

    return (
        <>
            {!showNationalId ? (
                <div>
                    <div
                        className={`
                    ${classes.outlined} 
                    ${classes.container}
                    ${isLoadingExtractID ? classes.cursorDefault : ""}
                    ${!isLoadingExtractID && error ? errorClasses.borderError : ''}
                    ${!isLoadingExtractID && error ? errorClasses.formError : ''}
                `}
                        title={isLoadingExtractID ? "" : "Upload your national id image"}
                    >
                        <label
                            className={`${inputClasses.label} `}
                        >
                            National ID
                        </label>

                        {/* Upload Button */}
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChangeImage}
                            maxNumber={1}
                            dataURLKey="data_url"
                        >
                            {({
                                onImageUpload,
                                dragProps,
                            }) =>
                            {
                                return (
                                    <LoadingButton
                                        startIcon={!isLoadingExtractID &&
                                            <UploadIcon />}
                                        className={classes.btn}
                                        component="label"
                                        fullWidth
                                        loading={isLoadingExtractID}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Add File
                                    </LoadingButton>
                                )
                            }
                            }

                        </ImageUploading >
                    </div>
                    <div >
                        {!isLoadingExtractID && <ErrorMessage
                            name={"nationalId"}
                            component={InputError}
                        />}
                    </div>
                </div >
            ) : (
                <Input
                    label="National Id"
                    name="nationalId"
                    type="text"
                />
            )}
        </>
    )
}

export default ExtractNationalIdUi