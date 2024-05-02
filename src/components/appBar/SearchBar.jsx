import { useDispatch } from 'react-redux';

import { SearchBarUi } from './SearchBarUi'
import useSearchForPartner from '../../hooks/commonApis/use-search-for-partner'
import { uiActions } from '../../store/ui-slice';
import useScreenWidth from '../../hooks/use-screen-width';

export const SearchBar = () =>
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
    const screenWidth = useScreenWidth();
    const fullWidth = screenWidth <= 600;

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
