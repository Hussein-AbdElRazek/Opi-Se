import { FormHelperText, Box } from '@mui/material'
import classes from "./styles/InputError.module.css"

const InputError = (props) =>
{
    const { children } = props;
    return (
        <FormHelperText
            className={classes.errorText}
            component={Box}
        >
                {children}
        </FormHelperText>
    )
}

export default InputError