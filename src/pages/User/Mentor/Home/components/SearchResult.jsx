import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ClickAwayListener, Grow, Popper } from '@mui/material'

import classes from './styles/SearchResult.module.css'
import { uiActions } from '../../../../../store/ui-slice'
import SearchItem from './SearchItem'

export const searchResultUiId = "searchResult"

const SearchResult = ({ anchorRef }) =>
{

    const dispatch = useDispatch()
    //handle menu open or not
    const isPopMenuOpened = useSelector(state => state.ui.isPopMenuOpened)[searchResultUiId] || false;

    const handleClose = (event) =>
    {
        if (anchorRef?.current && anchorRef?.current?.contains(event?.target))
        {
            return;
        }

        handleClosePopMenu();
    };

    const handleClosePopMenu = (event) =>
    {
        dispatch(uiActions.closePopMenu(searchResultUiId))
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(isPopMenuOpened);
    useEffect(() =>
    {
        if (prevOpen.current === true && isPopMenuOpened === false)
        {
            anchorRef?.current?.focus();
        }

        prevOpen.current = isPopMenuOpened;
    }, [anchorRef, isPopMenuOpened]);

    return (

        <Popper
            open={isPopMenuOpened}
            anchorEl={anchorRef.current}
            role={undefined}
            placement={"bottom-start"}
            transition
            disablePortal
            className={classes.popper}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            'top',
                    }}
                >
                    <div
                        className={`${classes.container}  center-y center-x `}
                    >
                        <ClickAwayListener
                            onClickAway={handleClose}
                        >
                            <div className='w-100'>
                                <SearchItem
                                    profileImage=""
                                    userName="Nada Abdelnasser"
                                    positionTitle="positionTitle"
                                />
                            </div>
                        </ClickAwayListener>
                    </div>
                </Grow>)}
        </Popper>
    )
}

export default SearchResult