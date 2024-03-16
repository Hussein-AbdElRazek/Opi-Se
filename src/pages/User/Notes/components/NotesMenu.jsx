import { PopUpMenu } from '../../../../components/common'
import { ReactComponent as MenuIcon } from '../../../../assets/icons/menu.svg'

import { NavLink } from 'react-router-dom'
import { uiActions } from '../../../../store/ui-slice'
import { useDispatch } from 'react-redux'
import trashBarClasses from '../../NotesTrash/styles/TrashBar.module.css'
import classes from '../styles/NotesMenu.module.css'
const NotesMenu = () =>
{
    const dispatch = useDispatch();
    const uiId = "notesOptions"
    const closeMenu = () =>
    {
        dispatch(uiActions.closePopMenu(uiId));
    };
    const menuItems = [
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            to: "new",
            children: "Add Note",
        },
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            to: "trash",
            children: "Trash",
        },
    ]
    return (
        <div
            className={classes.container}
        >
            <PopUpMenu
                id={uiId}
                openBtnType="base"
                openBtnChild={
                    <MenuIcon fill='var(--secondary)' />
                }
                openBtnClassName={trashBarClasses.optionBtn}
                menuItems={menuItems}
                placement="bottom-end"

            />
        </div>
    )
}

export default NotesMenu