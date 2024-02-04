import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Btn } from '../inputs';
import { deleteMessage } from '../../store/chat-slice';
import { ModalCard } from '../ui';
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
        dispatch(deleteMessage({ requestBody, messagesId }))
        onClose();
    }
    return (
        <ModalCard
            open={open}
            onClose={onClose}
        >
            <p>Delete this Message?</p>
            <Btn
                onClick={handleDeleteMessage}
            >
                Delete
            </Btn>
            <Btn
                onClick={onClose}
                className='cancel-btn'
            >
                Cancel
            </Btn>
        </ModalCard>
    )
}
