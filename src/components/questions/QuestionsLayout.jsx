import classes from './styles/QuestionsLayout.module.css'

export const QuestionsLayout = ({ children }) =>
{
    return (
        <div className={classes.container}>{children}</div>
    )
}
