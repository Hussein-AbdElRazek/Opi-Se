import { Modal } from '@mui/material'
import classes from './styles/ModalCard.module.css'

export const ModalCard = (props) =>
{
    const { open, onClose, children } = props;
    return (
        <Modal
            open={open}
            onClose={onClose}
            className='center-x center-y'
        >
            <div
                className={classes.container}
            >
                {children}
            </div>
        </Modal>
    )
}
