import { Chip as ChipMui } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import classes from './styles/Chip.module.css'

export const Chip = (props) =>
{
    const { value, disabled, onDelete } = props;
    return (
        <ChipMui
            label={`${value?.skillName}    ${value?.skillRate}`}
            onDelete={!disabled ? onDelete : null}
            className={`
                ${classes.chip} 
                ${!!disabled ? classes.disabled : ""}
            `}
            deleteIcon={<ClearRoundedIcon />}
        />
    )
}
