import { useEffect } from 'react'
import useHttp from '../../../../../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux';
import useScrollingPagination from '../../../../../hooks/use-scrolling-pagination';
import { tasksActions } from '../../../../../store/tasks-slice';
import { taskModulePath } from '../../../../../config';

const useGetAllTasks = () =>
{
    // useGetAllTasks hook to handle call getAllTasks API

    const {
        sendRequest: getAllTasks,
        isLoading: isLoadingGetAllTasks,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const tasksType = "all"
    // handle pagination 
    const initialTotalPages = useSelector(state => state.tasks.totalPages[tasksType]);

    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetAllTasks, initialTotalPages);

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

                // update total length in store
                dispatch(tasksActions.updateTotalLength({ tasksType, totalLength: totalNumOfItems }))
            }
        };

        getAllTasks(
            {
                url: `${taskModulePath}/getAllTasks?matchId=${matchId}&page=${currentPage + 1}&limit=${20}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, matchId, getAllTasks])

    return {
        isLoadingGetAllTasks,
        lastElementRef,
    }
}

export default useGetAllTasks