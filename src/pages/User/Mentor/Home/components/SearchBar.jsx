import React from 'react'
import SearchBarUi from './SearchBarUi'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../../../store/ui-slice';
import { searchResultUiId } from './SearchResult';

const SearchBar = () =>
{
    const dispatch = useDispatch();

    const handleSearch = () =>
    {
        dispatch(uiActions.openPopMenu(searchResultUiId))
    }
    return (
        <SearchBarUi handleSearch={handleSearch} />
    )
}

export default SearchBar