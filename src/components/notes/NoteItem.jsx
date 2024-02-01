import Grid from '@mui/material/Unstable_Grid2';
import { ButtonBase, IconButton, Divider } from '@mui/material';
import { Form, Formik } from 'formik'

import classes from './styles/NoteItem.module.css'
import { FormikControl } from '../inputs';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteOutlined.svg'
import { getTypingDirection } from '../../helpers/getTypingDirection';
import { NoteDate } from './NoteDate';
import { NoteTimeAndDate } from './NoteTimeAndDate';
import { noteValidationSchema } from './noteValidationSchema';
import NotesActions from '../../pages/User/Notes/components/NotesActions';
import PinBtn from '../../pages/User/Notes/components/PinBtn';
export const NoteItem = (props) =>
{
    const {
        _id,
        noteTitle,
        noteContent,
        createdAt,
        noteColor,
        isNew,
        isEdit,
        isPinned,
        isTrash,
        onSubmit,
        isLoading,
        lastElementRef,
        onCancel,
        makeNoteEditable,
    } = props;
    const disabled = !(isNew || isEdit);
    const initialValues = {
        noteTitle: noteTitle || "",
        noteContent: noteContent || '',
        noteColor: noteColor,
        _id
    };
    return (
        <Grid
            xl={3}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            ref={lastElementRef}
        >
            <div
                className={classes.container}
                style={{ backgroundColor: `var(${noteColor})` }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={noteValidationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {(formik) => (
                        <Form>
                            <div
                                className={`
                                        ${classes.group} 
                                        ${classes.positionRelative}
                                        ${classes.mb}
                                    `}
                            >
                                {disabled && <NoteDate date={createdAt} />}

                                {!isNew && <PinBtn _id={_id} isPinned={isPinned} />}

                            </div>

                            {/* Title */}
                            <div
                                className={`${classes.group} ${classes.mb}`}
                            >
                                <div
                                    className={`${classes.title} ${classes.removeChildMargin}`}
                                    style={{
                                        direction:
                                            getTypingDirection(formik.values.noteTitle)
                                    }}
                                    title={formik.values.noteTitle}
                                >
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        name="noteTitle"
                                        placeholder="Note Title"
                                        disabled={disabled}
                                    />
                                </div>

                                {(disabled && !isTrash) && (
                                    <ButtonBase
                                        className={classes.containedIconBtn}
                                        onClick={makeNoteEditable(_id)}
                                    >
                                        <EditIcon fill={`var(${noteColor})`} />
                                    </ButtonBase>
                                )}

                            </div>

                            <Divider className={`${classes.divider} ${classes.mb}`} />

                            {/* Content */}
                            <div
                                className={`${classes.removeChildMargin} ${classes.content}`}
                                style={{
                                    direction: getTypingDirection(formik.values.noteContent)
                                }}
                                title={noteContent}
                            >
                                <FormikControl
                                    control="input"
                                    type="text"
                                    name="noteContent"
                                    placeholder="Type..."
                                    multiline={true}
                                    rows={6}
                                    disabled={disabled}
                                />
                            </div>

                            {/* Time & Delete  */}
                            {disabled && (
                                <div
                                    className={`${classes.group} ${classes.positionRelative}`}
                                >
                                    <NoteTimeAndDate date={createdAt} />

                                    <IconButton
                                        className={classes.icon}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            )}

                            {/* NotesActions (Confirm & Cancel btns) */}
                            {(!disabled && !isTrash) && (
                                <NotesActions
                                    _id={_id}
                                    onCancel={onCancel}
                                    isLoading={isLoading}
                                    resetForm={formik.resetForm}
                                />
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </Grid>
    )
}
