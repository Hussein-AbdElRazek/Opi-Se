import { IconButton, Menu, MenuItem } from '@mui/material'

import classes from './styles/OptionsMenu.module.css'
import { useState } from 'react';
import { ConfirmDeleteMessage } from './ConfirmDeleteMessage';
export const OptionsMenu = (props) =>
{
    const { messageId } = props;
    //handle ui of menu
    const [anchorEl, setAnchorEl] = useState(null);
    const isOptionsOpen = Boolean(anchorEl);
    const handleOpenOptions = (event) =>
    {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseOptions = () =>
    {
        setAnchorEl(null);
    };
    const [isConfirmDeleteMessageOpen, setIsConfirmDeleteMessageOpen] = useState(false);
    const handleOpenConfirmDeleteMessage = () =>
    {
        setIsConfirmDeleteMessageOpen(true);
        handleCloseOptions();
    }
    const handleCloseConfirmDeleteMessage = () =>
    {
        setIsConfirmDeleteMessageOpen(false);
    }

    return (
        <div
            className={classes.container}
        >
            {/* Arrow down icon */}
            <IconButton
                id="messageOptionsBtn"
                aria-controls={isOptionsOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOptionsOpen ? 'true' : undefined}
                onClick={handleOpenOptions}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#F5F5F5" />
                </svg>
            </IconButton>
            <Menu
                id="messageOptionsMenu"
                anchorEl={anchorEl}
                open={isOptionsOpen}
                onClose={handleCloseOptions}
                MenuListProps={{
                    'aria-labelledby': 'messageOptionsBtn',
                }}
            >
                <MenuItem onClick={handleCloseOptions}>Reply</MenuItem>
                <MenuItem onClick={handleOpenConfirmDeleteMessage}>Delete</MenuItem>
            </Menu>
            <ConfirmDeleteMessage
                open={isConfirmDeleteMessageOpen}
                onClose={handleCloseConfirmDeleteMessage}
                messageId={messageId}
            />
        </div>
    )
}
