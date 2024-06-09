import classes from './UsersCounters.module.css'
import threeLinesFrame from '../../../assets/images/threeLinesFrame.svg'

const UsersCountersUi = () =>
{
    return (
        <div className={`${classes.container} center-y space-between flex-wrap`}>
            <div className={classes.left}>
                <div className={classes.decorParent}>
                    <h2>The largest Study
                        Service.</h2>

                    <img src={threeLinesFrame} alt="" />
                </div>

                <span>
                    100% Online
                </span>
            </div>

            <div className={classes.right}>
                <span>000,000,000</span>
                <h3>Study Partners</h3>
                <div className={classes.line} />

                <span>000,000,000</span>
                <h3>Credentialed mentors ready to help</h3>
                <div className={classes.line} />

                <span>000,000,000</span>
                <h3>Parents</h3>
            </div>
        </div>
    )
}

export default UsersCountersUi