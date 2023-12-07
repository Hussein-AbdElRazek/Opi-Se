import { Chip as ChipMui } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import classes from './styles/Chip.module.css'

export const Chip = (props) =>
{
    const { key, value, disabled, onDelete } = props;
    return (
        <ChipMui
            key={key}
            label={`${value?.name}    ${value?.rate}`}
            onDelete={!disabled ? onDelete : null}
            className={`
                ${classes.chip} 
                ${!!disabled ? classes.disabled : ""}
            `}
            deleteIcon={<ClearRoundedIcon  />}
        />
    )
}
