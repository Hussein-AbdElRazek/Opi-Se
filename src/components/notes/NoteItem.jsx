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
import PinBtn from '../../pages/User/Notes/components/PinBtn';
import TrashOptions from '../../pages/User/NotesTrash/components/TrashOptions';
import { NavLink } from 'react-router-dom';
import { notesActions } from '../../store/notes-slice';
import { useDispatch } from 'react-redux';
export const NoteItem = (props) =>
{
    const {
        _id,
        noteTitle,
        noteContent,
        createdAt,
        noteColor,
        isPinned,
        isTrash,
        onSubmit,
        lastElementRef,
        pinNote,
        onDelete,
    } = props;

    const initialValues = {
        noteTitle: noteTitle || "",
        noteContent: noteContent || '',
        noteColor: noteColor,
        _id
    };
    const dispatch = useDispatch();
    const onEdit = () =>
    {
        dispatch(notesActions.updateOpenedNote(initialValues))
    }
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
                style={{ backgroundColor: noteColor ? `var(${noteColor})` : "var(--trash-note)" }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={noteValidationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {(formik) => (
                        <Form>

                            {/* NoteDate & PinBtn */}
                            <div
                                className={`
                                        ${classes.group} 
                                        ${classes.positionRelative}
                                        ${classes.mb}
                                    `}
                            >
                                <NoteDate date={createdAt} />

                                {(!isTrash) && <PinBtn pinNote={pinNote} _id={_id} isPinned={isPinned} />}

                            </div>

                            {/* Title && Edit Btn / Options Btn*/}
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
                                    />
                                </div>
                                {/* Edit Btn */}
                                {(!isTrash) && (
                                    <ButtonBase
                                        className={classes.containedIconBtn}
                                        LinkComponent={NavLink}
                                        to="edit"
                                        onClick={onEdit}
                                    >
                                        <EditIcon fill={noteColor ? `var(${noteColor})` : "var(--trash-note)"} />
                                    </ButtonBase>
                                )}

                                {/* Options Btn */}
                                {isTrash && <TrashOptions note={initialValues} />}
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
                                    disabled={true}
                                />
                            </div>

                            {/* Time & Move to trash  */}
                            <div
                                className={`${classes.group} ${classes.positionRelative}`}
                            >
                                <NoteTimeAndDate date={createdAt} />

                                {/* Move to trash */}
                                {!isTrash && (
                                    <IconButton
                                        className={classes.icon}
                                        title={'Move to trash'}
                                        onClick={onDelete && onDelete(_id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Grid>
    )
}
