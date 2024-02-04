import { ButtonBase, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './styles/PopUpMenu.module.css'
export const PopUpMenu = (props) =>
{
    const {
        openBtnType,
        openBtnChild,
        openBtnClassName,
        menuProps,
        menuItems,
        id,
    } = props;

    // handle open menu btn
    const btnsTypes = {
        "icon": IconButton,
        "base": ButtonBase,
    }
    const OpenBtn = btnsTypes[openBtnType];

    //handle menu open or not
    const [anchorEl, setAnchorEl] = useState(null);
    const isPopMenuOpened = useSelector(state => state.ui.isPopMenuOpened)[id];
    const dispatch = useDispatch();
    
    const handleOpenOptions = (event) =>
    {
        setAnchorEl(event.currentTarget);
        dispatch(uiActions.openPopMenu(id))
    };

    const handleCloseOptions = () =>
    {
        setAnchorEl(null);
        dispatch(uiActions.closePopMenu(id))
    };

    // handle if menu closed from outside the component
    useEffect(() =>
    {
        if (!isPopMenuOpened)
        {
            setAnchorEl(null);
        }
    }, [isPopMenuOpened])

    return (
        <>
            <OpenBtn
                id="openMenuBtn"
                aria-controls={isPopMenuOpened ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isPopMenuOpened ? 'true' : undefined}
                onClick={handleOpenOptions}
                className={openBtnClassName}
            >
                {openBtnChild}
            </OpenBtn>

            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={!!isPopMenuOpened}
                onClose={handleCloseOptions}
                MenuListProps={{
                    'aria-labelledby': 'openMenuBtn',
                }}
                className={classes.menu}
                sx={{
                    ".MuiMenu-paper": {
                        boxShadow: "0px 1px 4px 0px #00000040",
                        borderRadius: "var(--border-radius-inputs)",
                    }
                }}
                {...menuProps}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={item.onClick}>{item.children}</MenuItem>
                ))}
            </Menu>
        </>
    )
}
