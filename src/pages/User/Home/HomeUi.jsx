import React from 'react'
import { HeaderText, IllustrationSection } from '../../../components/ui'
import classes from './Home.module.css'
import { Btn } from '../../../components/inputs'
import { Badge, IconButton, Tooltip } from '@mui/material'
import messageIcon from '../../../assets/icons/message.svg'
import { NavLink, Outlet } from 'react-router-dom'
import homeBackground from '../../../assets/images/homeBackground.png'

const HomeUi = ({ isHavePartner, isNewMessage }) =>
{
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.left}
            >
                <HeaderText>
                    With
                    <span className={classes.logo}>
                        Opi Se
                    </span>
                    You
                    <br />
                    Can Find The
                    <br />
                    Perfect Study Partner
                </HeaderText>

                <p>
                    Welcome to our learning community! Step into a world of opportunity at Opi Se where learning is a shared journey. Start exploring, connecting, and achieving your academic goals.
                </p>

                <div
                    className={classes.action}
                >
                    {isHavePartner ?
                        (<Btn
                            disabled={isHavePartner}
                        >
                            Get a New Brain Buddy
                        </Btn>) :
                        (
                            <NavLink
                                to="recommendation?p=1&l=1"
                            >
                                <Btn
                                    disabled={isHavePartner}
                                >
                                    Get a New Brain Buddy
                                </Btn>
                            </NavLink>
                        )}
                </div>

                {/* illustration  section sm screens*/}
                <img className={classes.smBg} src={homeBackground} alt="" />
            </div>

            {/* illustration  section big screens*/}
            <div
                className={classes.right}
            >
                <IllustrationSection
                    size="small"
                    type="home"
                />
            </div>

            {/* chat btn */}
            <Tooltip
                title="Chats">
                <IconButton
                    LinkComponent={NavLink}
                    to="chats"
                    className={classes.messageIcon}
                >
                    <Badge
                        overlap="circular"
                        badgeContent=" "
                        invisible={!isNewMessage}
                    >
                        <img className={classes.messageIconImg} src={messageIcon} alt="messageIcon" />
                    </Badge>
                </IconButton>
            </Tooltip>
            {/* for make nested  pages in home */}
            <Outlet />
        </div>
    )
}

export default HomeUi