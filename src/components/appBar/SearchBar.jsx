import { useDispatch } from 'react-redux';

import { SearchBarUi } from './SearchBarUi'
import useSearchForPartner from '../../hooks/commonApis/use-search-for-partner'
import { uiActions } from '../../store/ui-slice';

export const SearchBar = ({ fullWidth }) =>
{
    const {
        handleSearchForPartner,
        isLoadingSearchForPartner
    } = useSearchForPartner();
    const dispatch = useDispatch();
    const smSearchId = "smSearchId"

    const closeSmSearchBar = () =>
    {
        dispatch(uiActions.closePopMenu(smSearchId))
    }
    
    return (
        <SearchBarUi
            handleSearchForPartner={handleSearchForPartner}
            isLoadingSearchForPartner={isLoadingSearchForPartner}
            fullWidth={fullWidth}
            closeSmSearchBar={closeSmSearchBar}
            smSearchId={smSearchId}
        />
    )
}
