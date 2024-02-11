import React, { useState } from 'react'
import ActionsLayout from './ActionsLayout'
import { Btn } from '../../../../components/inputs';
import { ReactComponent as UnMatchIcon } from '../../../../assets/icons/unMatch.svg';
import { ReactComponent as MessageCircleIcon } from '../../../../assets/icons/messageCircle.svg';
import classes from '../styles/Btns.module.css'
import DisMatchPop from './DisMatchPop';
const MyPartnerActions = ({ userData }) =>
{
    const [isRatePopOpen, setIsRatePopOpen] = useState(false);

    const closeRatePop = () =>
    {
        setIsRatePopOpen(false)
    }

    const openRatePop = () =>
    {
        setIsRatePopOpen(true)
    }
    
    return (
        <ActionsLayout>
            <Btn
                startIcon={<UnMatchIcon />}
                onClick={openRatePop}
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

            {/* Confirm disMatch modal */}
            <DisMatchPop
                open={isRatePopOpen}
                onClose={closeRatePop}
            />
        </ActionsLayout>
    )
}

export default MyPartnerActions