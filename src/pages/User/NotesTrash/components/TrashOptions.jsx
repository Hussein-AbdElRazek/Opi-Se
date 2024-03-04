import { PopUpMenu } from '../../../../components/common'
import { ReactComponent as OptionsIcon } from '../../../../assets/icons/options.svg'
import noteItemClasses from '../../../../components/notes/styles/NoteItem.module.css'
import ConfirmModal from './ConfirmModal'
import useModal from '../hooks/use-modal'
import useDeleteTrashNote from '../hooks/use-delete-trash-note'
import useRestoreNote from '../hooks/use-restore-note'
import { LoadingFullScreen } from '../../../../components/ui'
const TrashOptions = ({ note }) =>
{
    // handle modal ui state 
    const uiId = "trashNoteOptions";
    const {
        openModal,
        closeModal,
        isModalOpened,
    } = useModal(uiId);

    // delete trash note
    const {
        isLoadingDeleteTrashNote,
        handleDeleteTrashNote,
    } = useDeleteTrashNote(note._id, uiId);

    // restore trash note
    const {
        isLoadingRestoreNote,
        handleRestoreNote,
    } = useRestoreNote(note, uiId);

    const menuItems = [
        {
            onClick: openModal,
            children: "Delete",
        },
        {
            onClick: handleRestoreNote,
            children: "Restore",
        },
    ]
    return (
        <>
            <PopUpMenu
                id={note._id}
                openBtnType="base"
                openBtnChild={
                    <OptionsIcon fill='var(--tab)' />
                }
                openBtnClassName={noteItemClasses.containedIconBtn}
                menuItems={menuItems}
            />

            {/* Confirm delete trash note modal  */}
            <ConfirmModal
                open={!!isModalOpened}
                onClose={closeModal}
                type="one"
                onDelete={handleDeleteTrashNote}
                isLoading={isLoadingDeleteTrashNote}
            />

            {isLoadingRestoreNote && <LoadingFullScreen />}
        </>
    )
}

export default TrashOptions