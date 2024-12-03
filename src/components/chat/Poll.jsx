import { ClickAwayListener, Grow, ListItemIcon, MenuItem, Popper } from '@mui/material'
import React from 'react'

import { ReactComponent as PollIcon } from '../../assets/icons/poll.svg'
import popClasses from '../common/styles/PopUpMenu.module.css';
import classes from './styles/Poll.module.css';
import { ReactComponent as PollContainedIcon } from '../../assets/icons/pollContained.svg'
import { FormikContainer, FormikControl } from '../inputs';
import { PollInputsArray } from './PollInputsArray';
import { pollValidationSchema } from './pollValidationSchema';
import { pollInitialValues } from './pollInitialValues';
export const Poll = ({  submitPollMessage }) =>
{
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () =>
    {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) =>
    {
        if (anchorRef.current && anchorRef.current.contains(event.target))
        {
            return;
        }

        setOpen(false);
    };

    return (
        <div
            key={"poll"}
        >
            <MenuItem
                key={"pollItem"}
                ref={anchorRef}
                onClick={handleToggle}
                className={`${popClasses.item} ${popClasses.hoverStroke}`}
            >
                <ListItemIcon >
                    < PollIcon
                        stroke='var(--text-header)' />
                </ListItemIcon>
                Poll
            </MenuItem>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="top-start"
                transition
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: 'left bottom',
                        }}
                    >
                        <div>
                            <ClickAwayListener onClickAway={handleClose}>

                                <div
                                    className={classes.container}
                                >
                                    <FormikContainer
                                        initialValues={pollInitialValues}
                                        validationSchema={pollValidationSchema}
                                        onSubmit={submitPollMessage}
                                    >
                                        {/* Poll question header */}
                                        <div
                                            className={classes.header}
                                        >
                                            <PollContainedIcon />
                                            <h4>
                                                Create Poll
                                            </h4>
                                        </div>

                                        {/* Poll question input */}
                                        <div
                                            className={classes.basicInput}
                                        >
                                            <FormikControl
                                                control='input'
                                                type='text'
                                                name='pollQuestion'
                                                placeholder='Type your Question'
                                            />
                                        </div>
                                        <PollInputsArray />
                                    </FormikContainer>

                                </div>
                            </ClickAwayListener>
                        </div>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
