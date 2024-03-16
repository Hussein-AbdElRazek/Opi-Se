import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAddNote from '../hooks/use-add-note';
import { ItemCard } from '../../../../components/common';
import { notesInitialValues, notesInputs } from '../../../../components/notes/notesInputsData';
import { noteValidationSchema } from '../../../../components/notes/noteValidationSchema';
import { LoopOnInputs } from '../../../../components/inputs';
import ColorPicker from './ColorPicker';

const AddNote = () =>
{
    const navigate = useNavigate();
    const goBack = () => { navigate(-1 || "/notes") }

    const {
        handleAddNote,
        isLoadingAddNote
    } = useAddNote(goBack);

    return (
        <ItemCard
            type="add"
            title="Add Note"
            initialValues={notesInitialValues}
            validationSchema={noteValidationSchema}
            onSubmit={handleAddNote}
            onClose={goBack}
            isLoading={isLoadingAddNote}
        >
            <ColorPicker 
                disabled={isLoadingAddNote}
            />
            <LoopOnInputs
                inputs={notesInputs}
                disabled={isLoadingAddNote}
            />
        </ItemCard>
    )
}

export default AddNote