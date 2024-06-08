import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";
import useScrollingPagination from "../../../../hooks/use-scrolling-pagination";
import { noteModulePath } from "../../../../config";

const useGetNotes = () =>
{
    // useGetNotes hook to handle call getAllNotes API

    const {
        sendRequest: getNotes,
        isLoading: isLoadingGetNotes,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    // handle pagination 
    const initialTotalPages = useSelector(state => state.notes.totalPages);
    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetNotes, initialTotalPages);

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages }) =>
        {
            if (message.includes("success"))
            {
                // update store with new notes
                dispatch(notesActions.mergeNotes(data))
                // TODO Remove sort after zoz handle it
                dispatch(notesActions.sortNotes())

                // update total pages in store
                dispatch(notesActions.updateTotalPages(totalPages))
            }
        };

        getNotes(
            {
                url: `${noteModulePath}/getAllNotes?matchId=${matchId}&page=${currentPage + 1}&limit=${20}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, getNotes, matchId])

    return {
        isLoadingGetNotes,
        lastElementRef,
    }
}

export default useGetNotes;