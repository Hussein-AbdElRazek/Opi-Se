import React from 'react'
import ActionsLayout from './ActionsLayout'
import { Btn } from '../../../../components/inputs';
import { ReactComponent as UnMatchIcon } from '../../../../assets/icons/unMatch.svg';
import { ReactComponent as MessageCircleIcon } from '../../../../assets/icons/messageCircle.svg';
import classes from '../styles/Btns.module.css'
const MyPartnerActions = ({ userData }) =>
{

    return (
        <ActionsLayout>
            <Btn
                startIcon={<UnMatchIcon />}
            >
                UnMatch
            </Btn>

            <Btn
                className={classes.lightBtn}
                startIcon={<MessageCircleIcon />}
                to={`/chats/chat?id=${userData._id}&userName=${userData.userName}&profileImage=${userData.profileImage}`}
            >
                Message
            </Btn>
        </ActionsLayout>
    )
}

export default MyPartnerActions