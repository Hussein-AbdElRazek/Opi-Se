import classes from './styles/Points.module.css'

export const Points = ({ points }) =>
{
    return (
        <div className={classes.container}>{points}</div>
    )
}
