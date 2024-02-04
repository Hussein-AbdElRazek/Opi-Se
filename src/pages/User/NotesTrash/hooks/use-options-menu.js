import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../../../store/ui-slice";

const useOptionsMenu = (id) =>
{
    // useOptionsMenu hook to handle open/close options menu
    const isOptionsMenuOpened = useSelector(state => state.ui.isPopMenuOpened)[id];
    const dispatch = useDispatch();

    // open options menu
    const openOptionsMenu = () =>
    {
        dispatch(uiActions.openPopMenu(id));
    }

    // close options menu
    const closeOptionsMenu = () =>
    {
        dispatch(uiActions.closePopMenu(id));
    }

    return {
        openOptionsMenu,
        closeOptionsMenu,
        isOptionsMenuOpened,

    }
}

export default useOptionsMenu;