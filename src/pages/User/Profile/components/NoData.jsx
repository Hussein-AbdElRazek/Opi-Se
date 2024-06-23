import classes from '../styles/NoData.module.css'

const NoData = ({ children }) =>
{
    return (
        <p className={classes.empty}>{children}</p>
    )
}

export default NoData