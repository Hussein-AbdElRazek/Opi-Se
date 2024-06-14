import { HeaderText, Paragraph } from '../../../../../../components/ui'
import { Button } from '@mui/material'

import { Btn } from '../../../../../../components/inputs'
import classes from './styles/Assignment.module.css'
import { ReactComponent as UploadIcon } from '../../../../../../assets/icons/upload.svg'
import { ReactComponent as FileIcon } from '../../../../../../assets/icons/file.svg'

const AssignmentUi = (props) =>
{
    const { title, description, img, isLoadingSubmitTask, submitTask, onChangeFile, files, disabled } = props
    return (
        <div className={classes.container}>
            <div className={`space-between ${classes.infoContainer} `}>
                <div
                    className={!!img ? classes.smTextContainer : ''}
                >
                    <HeaderText size={'medium'}>
                        {title}
                    </HeaderText>

                    <Paragraph>
                        {description}
                    </Paragraph>
                </div>
                {!!img && <div className={classes.imgContainer}><img src={img} alt="" /></div>}
            </div>

            <div
                className={classes.uploadParent}
            >
                <div className={` center-y flex-wrap ${classes.titleContainer}`}>
                    <h2>
                        {title}:
                    </h2>
                    {files && files.map((file) =>
                    (<div className={`${classes.file} center-x center-y`}>
                        <FileIcon />
                        {file.name}
                    </div>)
                    )}
                </div>

                <div
                    className={classes.uploadContainer}
                >
                    <Button
                        startIcon={
                            <UploadIcon />
                        }
                        className={classes.uploadBtn}
                        component="label"
                        disableTouchRipple
                        disabled={disabled}
                    >
                        Upload File
                        <input
                            onChange={onChangeFile}
                            type="file"
                            multiple
                            className={classes.hiddenInputFile}
                        />
                    </Button>

                    {files && files.map((file) =>
                    (<div className={`${classes.file} center-x center-y`}>
                        <FileIcon />
                        {file.name}
                    </div>)
                    )}
                </div>

            </div>
            <Btn
                type="submit"
                onClick={submitTask}
                isLoading={isLoadingSubmitTask}
                className={`${classes.action} ${disabled ? classes.actionDisabled : ""}`}
                disabled={disabled}
            >
                Submit
            </Btn>
        </div>
    )
}

export default AssignmentUi