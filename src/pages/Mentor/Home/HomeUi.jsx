import { NavLink, Outlet } from 'react-router-dom'
import { Badge, IconButton, Tooltip } from '@mui/material'

import { HeaderText, IllustrationSection } from '../../../components/ui'
import classes from '../../User/Home/Home.module.css'
import { Btn } from '../../../components/inputs'
import messageIcon from '../../../assets/icons/message.svg'
import homeBackground from '../../../assets/images/homeBackground.png'
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'

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
                    You Can
                    <br />
                    Create Quizzes and
                    <br />
                    Tasks for your students
                </HeaderText>

                <p>
                    Welcome to our learning community! Step into a world of opportunity at Opi Se where learning is a shared journey. Start exploring, connecting, and achieving your academic goals.
                </p>

                <div
                    className={classes.action}
                >
                    <Btn
                        to={'create'}
                        startIcon={<AddIcon fill='var(--primary)'/>}
                    >
                        Start Create
                    </Btn>
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