import { Modal } from '@mui/material'
import classes from './styles/PopUpCard.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const PopUpCard = ({ children, title }) =>
{
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const onClose = () =>
    {
        setOpen(false);
        navigate("/")
    }
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiBackdrop-root ": {
                    opacity: "0 !important"
                }
            }}
            opacity={0}
        >
            <div
                className={classes.container}
            >
                <h2
                    className={classes.title}
                >
                    {title}
                </h2>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </Modal>

    )
}
