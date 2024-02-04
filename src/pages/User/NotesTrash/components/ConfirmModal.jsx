import React from 'react'
import { ModalCard } from '../../../../components/ui'
import { Btn } from '../../../../components/inputs';

const ConfirmModal = (props) =>
{
    const {
        open,
        onClose,
        type,
        onDelete,
        isLoading,
    } = props;
    
    return (
        <ModalCard
            open={open}
            onClose={onClose}
        >
            <p>Delete {type === "one" ? "this Note" : "All Notes"}?</p>
            <Btn
                onClick={onDelete}
                isLoading={isLoading}
            >
                Delete
            </Btn>
            <Btn
                onClick={onClose}
                disabled={isLoading}
                className='cancel-btn'
            >
                Cancel
            </Btn>
        </ModalCard>
    )
}

export default ConfirmModal