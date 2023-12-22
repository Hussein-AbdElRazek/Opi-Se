import { Modal } from '@mui/material'
import useChat from '../../hooks/use-chat';
import { Btn } from '../inputs';
import classes from './styles/ConfirmDeleteMessage.module.css'
export const ConfirmDeleteMessage = (props) =>
{
    const {
        open,
        onClose,
        messageId,
    } = props;

    // const { deleteMessage } = useChat();
    const handleDeleteMessage = () =>
    {
        const requestBody = {
            id: messageId
        }
        // deleteMessage(requestBody, ()=>{});
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
