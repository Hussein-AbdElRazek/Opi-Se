import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'

import { HeaderText } from '../../../../components/ui'
import { ReactComponent as TrashIcon } from '../../../../assets/icons/trash.svg'
import classes from '../styles/TrashBar.module.css'
import { ConfirmDeleteModal } from '../../../../components/common/'
import useEmptyTheTrashNotes from '../hooks/use-empty-the-trash-notes'
import { uiActions } from '../../../../store/ui-slice'

const TrashBar = () =>
{
    // handle empty the trash
    const {
        isLoadingEmptyTheTrashNotes,
        handleEmptyTheTrashNotes
    } = useEmptyTheTrashNotes();
    const dispatch = useDispatch();
    const trashNotesModalId = "allTrashNotesModal";
    const isConfirmEmptyTheTrashOpen = useSelector(state => state.ui.isModalOpened)[trashNotesModalId];

    const handleOpenConfirmEmptyTheTrash = () =>
    {
        dispatch(uiActions.openModal(trashNotesModalId))
    }

    const handleCloseConfirmEmptyTheTrash = () =>
    {
        dispatch(uiActions.closeModal(trashNotesModalId))
    }

    return (
        <div
            className={classes.container}
        >
            <HeaderText>
                Trash
            </HeaderText>

            <IconButton
                onClick={handleOpenConfirmEmptyTheTrash}
                className={classes.trashBtn}
                title='Delete all'
            >
                <TrashIcon />
            </IconButton>

            {/* Confirm empty trash modal  */}
            <ConfirmDeleteModal
                open={!!isConfirmEmptyTheTrashOpen}
                onClose={handleCloseConfirmEmptyTheTrash}
                deleteMessage="All Notes"
                onDelete={handleEmptyTheTrashNotes}
                isLoading={isLoadingEmptyTheTrashNotes}
            />
        </div>
    )
}

export default TrashBar