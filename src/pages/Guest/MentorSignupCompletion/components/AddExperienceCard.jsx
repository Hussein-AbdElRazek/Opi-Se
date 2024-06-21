import { ButtonBase } from '@mui/material'

import classes from '../styles/AddExperienceCard.module.css'
import { ReactComponent as AddRoundedIcon } from '../../../../assets/icons/addRounded.svg';
import ArrayIconBtnClasses from '../../../../components/inputs/styles/ArrayIconBtn.module.css';

const AddExperienceCard = ({ onClick, haveExpList }) =>
{
    return (
        <div className={`${haveExpList ? '' : classes.parent} center-y`}>
            <ButtonBase
                onClick={onClick}
                className={`${classes.card} ${classes.container} ${haveExpList ? classes.haveExpList : ""}`}
            >
                {/* Add Btn */}
                <div className={`${ArrayIconBtnClasses.arrayIconBtn} ${classes.containerIcon} ${haveExpList ? classes.containerIconHaveExpList : ""} center-y center-x `}>
                    <AddRoundedIcon />
                </div>
                <h2>
                    Add Your Experience
                </h2>
            </ButtonBase>
        </div>
    )
}

export default AddExperienceCard