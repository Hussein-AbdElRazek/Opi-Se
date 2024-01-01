import { Modal } from '@mui/material'
import { Btn } from '../inputs';
import classes from './styles/ConfirmDeleteMessage.module.css'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { deleteMessage } from '../../store/chat-slice';
export const ConfirmDeleteMessage = (props) =>
{
    const {
        open,
        onClose,
        messageId,
    } = props;
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const handleDeleteMessage = () =>
    {
        const requestBody = {
            messageId: messageId
        }
        const messagesId = searchParams.get("id")
        dispatch(deleteMessage({requestBody, messagesId}))
        onClose();
    }
    return (
        <Modal
            open={open}
            onClose={onClose}
            className='center-x center-y'
        >
            <div
                className={classes.container}
            >
                <p>Delete this Message?</p>
                <Btn
                    onClick={handleDeleteMessage}
                >
                    Delete
                </Btn>
                <Btn
                    onClick={onClose}
                    className={classes.cancelBtn}
                >
                    Cancel
                </Btn>
            </div>
        </Modal>
    )
}
