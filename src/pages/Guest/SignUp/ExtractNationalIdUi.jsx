import { Tooltip } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import uploadIcon from '../../../assets/icons/upload.svg'
import inputClasses from '../../../components/inputs/styles/Input.module.css'
import outlinedClasses from '../../../components/inputs/styles/OutlinedIconBtn.module.css'
import classes from './ExtractNationalIdUi.module.css'
import { Input } from '../../../components/inputs'
const ExtractNationalIdUi = (props) =>
{
    const {
        isLoadingExtractID,
        showNationalId,
    } = props;
    return (
        <>
            {!showNationalId ? (
                <Tooltip
                    title="Upload your national id image"
                    disableHoverListener={isLoadingExtractID}
                >
                    <div
                        className={`
                    ${outlinedClasses.outlinedIconBtn} 
                    ${classes.container}
                    ${isLoadingExtractID ? classes.cursorDefault : ""}
                `}
                    >
                        <label
                            className={inputClasses.label}
                        >
                            National ID
                        </label>
                        <div>
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
                            >
                                Add File
                                <input
                                    id="idImageInput"
                                    type="file"
                                    accept="image/*"
                                    className={classes.hiddenInputFile}
                                />
                            </LoadingButton>
                        </div>
                    </div>
                </Tooltip>
            ) : (
                <Input
                    label="National Id"
                    name="nationalId"
                    type="text"
                    disabled={true}
                />
            )}
        </>
    )
}

export default ExtractNationalIdUi