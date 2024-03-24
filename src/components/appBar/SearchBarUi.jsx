import React from 'react'
import { SearchBarComponent } from './SearchBarComponent'
import { PopUpMenu } from '../common';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as BackIcon } from '../../assets/icons/backArrow.svg'
import classes from './styles/SearchBar.module.css'
import { IconButton } from '@mui/material';

export const SearchBarUi = (props) =>
{
    const {
        handleSearchForPartner,
        isLoadingSearchForPartner,
        fullWidth,
        closeSmSearchBar,
        smSearchId,
    } = props;

    return (
        <div>
            {/*  search bar for  screens bigger than 768px*/}
            <div
                className={classes.bigSmContainer}
            >
                <SearchBarComponent
                    handleSearchForPartner={handleSearchForPartner}
                    isLoadingSearchForPartner={isLoadingSearchForPartner}
                />
            </div>

            {/*  search bar for  screens smaller than 768px*/}
            <PopUpMenu
                id={smSearchId}
                openBtnType="icon"
                openBtnChild={
                    <SearchIcon fill='var(--text-header)' />
                }
                openBtnClassName={classes.openBtnSmSearch}
                children={
                    <div
                        className={classes.smContainer}
                    >
                        <IconButton
                            className={classes.backBtn}
                            onClick={closeSmSearchBar}
                        >
                            <BackIcon className={classes.backIcon} />
                        </IconButton>
                        <SearchBarComponent
                            handleSearchForPartner={handleSearchForPartner}
                            isLoadingSearchForPartner={isLoadingSearchForPartner}
                            fullWidth={fullWidth}
                        />
                    </div>
                }
                popperClassName={classes.popperContainer}
                containerClassName={classes.smContainerP}
                fullWidth={true}
            />
        </div>

    )
}
