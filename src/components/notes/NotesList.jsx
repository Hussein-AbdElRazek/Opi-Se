import Grid from '@mui/material/Unstable_Grid2';

import { NoteItem } from './NoteItem';
import classes from './styles/NotesList.module.css'

export const NotesList = (props) =>
{
    const {
        notes,
        lastElementRef,
        pinNote,
        isTrash,
        moveToTrash,
    } = props;

    return (
        <>
            {
                !!notes.length && <Grid
                    container
                    spacing={3}
                    className={classes.container}
                >
                    {notes.map((note, index) =>
                        <NoteItem
                            key={note._id}
                            lastElementRef={index + 1 === notes.length ? lastElementRef : null}
                            pinNote={pinNote}
                            isTrash={isTrash}
                            onDelete={moveToTrash}
                            {...note}
                        />
                    )}
                </Grid>
            }
        </>
    )
}
