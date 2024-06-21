import { IconButton } from '@mui/material';
import addExperienceClasses from '../styles/AddExperienceCard.module.css'
import classes from '../styles/ExperienceCard.module.css'
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg'
import moment from 'moment';
const ExperienceCard = (props) =>
{
    const { title, companyName, employmentType, startDate, endDate, onEdit, index } = props;
    const formattedStartDate = moment(startDate).format('MMMM yyyy')
    const formattedEndDate = moment(endDate).format('MMMM yyyy')
    return (
        <div className={`${addExperienceClasses.card} ${classes.container}`}>
            <h3>{title}</h3>
            <h4>{`${companyName} - ${employmentType}`}</h4>
            <h4>{`${formattedStartDate} - ${formattedEndDate}`}</h4>

            <div className={classes.editBtn}>
                <IconButton onClick={onEdit(index)} >
                    <EditIcon fill='var(--secondary)' />
                </IconButton>
            </div>
        </div>
    )
}

export default ExperienceCard