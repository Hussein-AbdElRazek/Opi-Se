import classes from '../styles/StepTitle.module.css'

const StepTitle = ({ step }) =>
{
    return (
        <div className={classes.container}>
            <span>{step}/2</span>to create your profile
        </div>
    )
}

export default StepTitle