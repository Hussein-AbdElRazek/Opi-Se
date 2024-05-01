import { useEffect } from 'react'
import useHttp from '../../../../../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux';
import useScrollingPagination from '../../../../../hooks/use-scrolling-pagination';
import { tasksActions } from '../../../../../store/tasks-slice';
import { taskModulePath } from '../../../../../config';
import { useSearchParams } from 'react-router-dom';

const useGetAllTasks = () =>
{
    // useGetAllTasks hook to handle call getAllTasks API

    const {
        sendRequest: getAllTasks,
        isLoading: isLoadingGetAllTasks,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const taskStatus = "all"
    // handle pagination 
    const initialTotalPages = useSelector(state => state.tasks.totalPages[taskStatus]);

    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetAllTasks, initialTotalPages);

    const [searchParams] = useSearchParams();
    const year = searchParams.get("y");
    const month = searchParams.get("m");

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages, totalNumOfItems }) =>
        {
            if (message.includes("success"))
            {
                // update store with new notes
                dispatch(tasksActions.setTasks({ taskStatus, tasks: data }))

                // update total pages in store
                dispatch(tasksActions.updateTotalPages({ taskStatus, totalPages }))

                // update total length in store
                dispatch(tasksActions.updateTotalLength({ taskStatus, totalLength: totalNumOfItems }))
            }
        };

        if (year && month) getAllTasks(
            {
                url: `${taskModulePath}/getAllTasks?matchId=${matchId}&page=${currentPage + 1}&limit=${20}&year=${year}&month=${Number(month) + 1}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, matchId, getAllTasks, year, month])

    return {
        isLoadingGetAllTasks,
        lastElementRef,
    }
}

export default useGetAllTasks