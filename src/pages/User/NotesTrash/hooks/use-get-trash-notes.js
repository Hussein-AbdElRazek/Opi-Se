import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";
import useScrollingPagination from "../../../../hooks/use-scrolling-pagination";

const useGetTrashNotes = () =>
{
    // useGetTrashNotes hook to handle call getAllTrashNotes API

    const {
        sendRequest: getTrashNotes,
        isLoading: isLoadingGetTrashNotes,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    // handle pagination 
    const initialTotalPages = useSelector(state => state.notes.totalPages);
    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetTrashNotes, initialTotalPages);

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages }) =>
        {
            if (message.includes("success"))
            {
                // update store with new notes
                dispatch(notesActions.mergeNotes(data))

                // update total pages in store
                dispatch(notesActions.updateTotalPages(totalPages))
            }
        };

        getTrashNotes(
            {
                url: `getAllTrashNotes?matchId=${matchId}&page=${currentPage + 1}&limit=${20}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, getTrashNotes, matchId])

    return {
        isLoadingGetTrashNotes,
        lastElementRef,
    }
}

export default useGetTrashNotes;