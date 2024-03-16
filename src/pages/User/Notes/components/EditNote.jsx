import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemCard } from '../../../../components/common';
import { notesInputs } from '../../../../components/notes/notesInputsData';
import { noteValidationSchema } from '../../../../components/notes/noteValidationSchema';
import { LoopOnInputs } from '../../../../components/inputs';
import ColorPicker from './ColorPicker';
import useEditNote from '../hooks/use-edit-note';
import { useSelector } from 'react-redux';

const EditNote = () =>
{
    const navigate = useNavigate();
    const goBack = () => { navigate(-1 || "/notes") }
    const {
        handleEditNote,
        isLoadingEditNote
    } = useEditNote(goBack);

    const notesInitialValues = useSelector(state => state.notes.openedNote);

    return (
        <ItemCard
            type="edit"
            title="Edit Note"
            initialValues={notesInitialValues}
            validationSchema={noteValidationSchema}
            onSubmit={handleEditNote}
            onClose={goBack}
            isLoading={isLoadingEditNote}
        >
            <ColorPicker
                disabled={isLoadingEditNote}
            />
            <LoopOnInputs
                inputs={notesInputs}
                disabled={isLoadingEditNote}
            />
        </ItemCard>
    )
}

export default EditNote