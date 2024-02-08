import React from 'react'
import { SearchBarUi } from './SearchBarUi'
import useSearchForPartner from '../../hooks/commonApis/use-search-for-partner'

export const SearchBar = ({ fullWidth }) =>
{
    const {
        handleSearchForPartner,
        isLoadingSearchForPartner
    } = useSearchForPartner();

    return (
        <SearchBarUi
            handleSearchForPartner={handleSearchForPartner}
            isLoadingSearchForPartner={isLoadingSearchForPartner}
            fullWidth={fullWidth}
        />
    )
}
