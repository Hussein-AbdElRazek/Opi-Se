import { LoadingButton } from '@mui/lab'
import ImageUploading from 'react-images-uploading';

import uploadIcon from '../../../assets/icons/upload.svg'
import inputClasses from '../../../components/inputs/styles/Input.module.css'
import classes from './ExtractNationalId.module.css'
import { Input } from '../../../components/inputs'
const ExtractNationalIdUi = (props) =>
{
    const {
        isLoadingExtractID,
        showNationalId,
        onChangeImage,
        images,
    } = props;

    return (
        <>
            {!showNationalId ? (
                <div
                    className={`
                    ${classes.outlined} 
                    ${classes.container}
                    ${isLoadingExtractID ? classes.cursorDefault : ""}
                `}
                    title={isLoadingExtractID ? "" : "Upload your national id image"}
                >
                    <label
                        className={inputClasses.label}
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
                                    startIcon={
                                        <img
                                            src={uploadIcon}
                                            alt="upload icon"
                                            hidden={isLoadingExtractID}
                                        />
                                    }
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