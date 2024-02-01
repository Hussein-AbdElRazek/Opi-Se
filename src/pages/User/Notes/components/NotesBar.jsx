import { useState } from 'react'
import { IconButton, ButtonBase } from '@mui/material';
import { useDispatch } from 'react-redux'

import { ReactComponent as AddIcon } from '../../../../assets/icons/add.svg'
import classes from '../styles/NotesBar.module.css'
import { notesActions } from '../../../../store/notes-slice';

const colors = ["--note1", "--note2", "--note3", "--note4", "--note5"];

const NotesBar = () =>
{
    const [colorsOpened, setColorsOpened] = useState(false);
    const dispatch = useDispatch();
    const toggleColors = () =>
    {
        setColorsOpened(prev => !prev);
    }
    const createNewNote = (noteColor) => () =>
    {
        //close colors picker
        setColorsOpened(false);

        // add new note to store
        const newNote = {
            noteColor,
            isNew: true,
            _id: new Date().toISOString()
        }
        dispatch(notesActions.addNote(newNote))
    }
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.colorPicker}
            >
                <IconButton
                    className={classes.addIcon}
                    onClick={toggleColors}
                >
                    <AddIcon />
                </IconButton>
                {colorsOpened && (
                    colors.map((color) => (
                        <ButtonBase
                            key={color}
                            className={classes.color}
                            style={{ backgroundColor: `var(${color})` }}
                            onClick={createNewNote(color)}
                        />
                    ))
                )}
            </div>
        </div >
    )
}

export default NotesBar