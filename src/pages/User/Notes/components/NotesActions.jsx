import classes from '../styles/NotesActions.module.css'
import CancelBtn from './CancelBtn'
import ConfirmBtn from './ConfirmBtn'

const NotesActions = (props) =>
{
    const {
        _id,
        onCancel,
        isLoading,
        resetForm,
    } = props;

    return (
        <div
            className={classes.actionBtns}
        >
            <CancelBtn onClick={onCancel} _id={_id} disabled={isLoading} resetForm={resetForm} />
            <ConfirmBtn isLoading={isLoading} />
        </div>
    )
}

export default NotesActions