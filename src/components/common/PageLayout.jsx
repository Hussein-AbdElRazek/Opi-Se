import classes from './styles/PageLayout.module.css'

export const PageLayout = ({ children }) =>
{
    return (
        <div
            className={classes.container}
        >
            {children}
        </div>
    )
}
