import { useEffect, useState } from 'react'
import useHttp from '../../../../../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux';
import useScrollingPagination from '../../../../../hooks/use-scrolling-pagination';
import { tasksActions } from '../../../../../store/tasks-slice';

const useGetSpecificTasksType = (tasksType) =>
{
    // useGetSpecificTasksType hook to handle call getSpecificTasksType API

    const [totalTasksLength, setTotalTasksLength] = useState(0);
    const {
        sendRequest: specificTasksType,
        isLoading: isLoadingSpecificTasksType,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    // handle pagination 
    const initialTotalPages = useSelector(state => state.tasks.totalPages[tasksType]);

    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingSpecificTasksType, initialTotalPages);

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages, totalNumOfItems }) =>
        {
            if (message.includes("success"))
            {
                // update store with new notes
                dispatch(tasksActions.mergeTasks({ tasksType, tasks: data }))

                // update total pages in store
                dispatch(tasksActions.updateTotalPages({ tasksType, totalPages }))

                setTotalTasksLength(totalNumOfItems)
            }
        };

        specificTasksType(
            {
                url: `getSpecificTasksType?matchId=${matchId}&page=${currentPage + 1}&limit=${20}&type=${tasksType}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, matchId, specificTasksType, tasksType])

    return {
        isLoadingSpecificTasksType,
        lastElementRef,
        totalTasksLength,
    }
}

export default useGetSpecificTasksType