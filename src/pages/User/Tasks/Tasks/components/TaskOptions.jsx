import { ConfirmDeleteModal, PopUpMenu } from '../../../../../components/common'
import { ReactComponent as OptionsIcon } from '../../../../../assets/icons/options.svg';
import classes from './styles/TaskOptions.module.css'
import useModal from '../../../../../hooks/use-modal';
import useDeleteTask from '../hooks/use-delete-task';
import { NavLink } from 'react-router-dom';
import { uiActions } from '../../../../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../../../store/tasks-slice';

const TaskOptions = ({ task }) =>
{
    // handle modal ui state 
    const {
        openModal,
        closeModal,
        isModalOpened,
    } = useModal(task._id);

    // delete task
    const {
        isLoadingDeleteTask,
        handleDeleteTask,
    } = useDeleteTask(task.taskStatus, task._id);
    const dispatch = useDispatch();

    const closeMenu = () =>
    {
        dispatch(uiActions.closePopMenu(task._id));
    };

    const handleOpenEditModal = () =>
    {
        closeMenu();
        dispatch(tasksActions.updateOpenedTask(task));
    }
    const menuItems = [
        {
            onClick: handleOpenEditModal,
            menuItemComponent: NavLink,
            to: "edit",
            children: "Edit Task",
        },
        {
            onClick: openModal,
            children: "Delete",
        },

    ]
    return (
        <>
            <PopUpMenu
                id={task._id}
                openBtnType="icon"
                openBtnChild={
                    <OptionsIcon />
                }
                openBtnClassName={classes.optionsBtn}
                menuItems={menuItems}
            />

            {/* Confirm delete task modal  */}
            <ConfirmDeleteModal
                open={!!isModalOpened}
                onClose={closeModal}
                deleteMessage="this task"
                onDelete={handleDeleteTask}
                isLoading={isLoadingDeleteTask}
            />

        </>
    )
}

export default TaskOptions