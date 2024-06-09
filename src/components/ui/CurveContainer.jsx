import classes from './styles/CurveContainer.module.css'

export const CurveContainer = ({ children }) =>
{
    return (
        <div
            className={classes.container}
        >
            {children}
        </div>
    )
}
