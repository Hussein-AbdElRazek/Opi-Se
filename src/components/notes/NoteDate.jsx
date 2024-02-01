import classes from './styles/NoteDate.module.css'

export const NoteDate = ({ date }) =>
{
    return (
        <span
            className={classes.date}
        >
            {new Date(date).toLocaleDateString()}
        </span>
    )
}
