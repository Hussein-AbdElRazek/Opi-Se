import React from 'react'
import { HeaderText, IllustrationSection } from '../../../components/ui'
import classes from './Home.module.css'
import { Btn } from '../../../components/inputs'
import { Badge, IconButton } from '@mui/material'
import messageIcon from '../../../assets/icons/message.svg'
import { NavLink, Outlet } from 'react-router-dom'
import { SearchBar } from '../../../components/appBar/SearchBar'
const HomeUi = ({ isHavePartner, isNewMessage }) =>
{
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.left}
            >
                {/* search bar for small screens only*/}
                <div
                    className={classes.searchBar}
                >
                    <SearchBar fullWidth={true} />
                </div>

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

            </div>
            <div
                className={classes.right}
            >
                <IllustrationSection
                    size="small"
                    type="home"
                />
            </div>

            <IconButton
                LinkComponent={NavLink}
                to="chats"
                className={classes.messageIcon}
                disabled={!isHavePartner}
                title="Chats"
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    invisible={!isNewMessage}
                >
                    <img className={classes.messageIconImg} src={messageIcon} alt="messageIcon" />
                </Badge>
            </IconButton>

            {/* for make nested  pages in home */}
            <Outlet />
        </div>
    )
}

export default HomeUi