import { useState } from 'react'
import Input from './Input'
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';

const Password = (props) =>
{
    const {
        ...rest
    } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) =>
    {
        event.preventDefault();
    };
    return (
        <Input
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ mr: 1, color: "var(--visibility-icon-color)" }}
                    >
                        {showPassword ? <VisibilityOffIcon sx={{ fontSize: "18px" }} /> : <VisibilityIcon sx = {{ fontSize: "18px" }} />}
                    </IconButton>
                </InputAdornment>
            }
            {...rest}
        />
    )
}

export default Password
