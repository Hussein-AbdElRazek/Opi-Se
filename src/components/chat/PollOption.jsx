import { Avatar, ButtonBase } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './styles/PollOption.module.css'
import { getTypingDirection } from '../../helpers/getTypingDirection';
import { chatActions, selectFromPoll } from '../../store/chat-slice';
import { selectOption } from '../../helpers/selectOption';

export const PollOption = (props) =>
{
    const {
        messageId,
        pollAnswers,
        optionVotes,
        optionSelectors,
        optionNumber,
        optionContent,
    } = props;

    const textDirection = getTypingDirection(optionContent);
    const dispatch = useDispatch();
    const myId = useSelector(state => state.auth.userData._id);
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const userProfileImg = searchParams.get("profileImage");

    const updateMessageOnSelect = () =>
    {
        
        let updatedPollAnswers = selectOption(optionSelectors, pollAnswers, optionNumber, optionVotes, myId);

        dispatch(chatActions.updateMessage({
            messagesId: userId,
            updatedMessage: {
                _id: messageId,
                pollAnswers: updatedPollAnswers,
            }
        }))
    }

    const handleSelectOption = () =>
    {
        // update state
        updateMessageOnSelect();

        // handle socket
        dispatch(selectFromPoll({ messageId: messageId, optionNumber }))
    }

    return (
        <div
            className={classes.container}
        >
            <ButtonBase
                className={`${classes.optionBtn} ${optionVotes ? classes.chosenOptionBtn : ""} `}
                onClick={handleSelectOption}
            >
                {!!optionVotes && <div className={` ${classes.chosenOptionBG}  ${optionVotes === 1 ? classes.chosenOptionBG50 : ""}`}></div>}

                <p
                    style={{ direction: textDirection, textAlign: textDirection === "rtl" ? "right" : "left" }}
                >
                    {optionContent}
                </p>

                {optionSelectors?.find(selector => selector === userId) && < Avatar className={classes.avatar} src={userProfileImg} />}
            </ButtonBase>
            <span
                className={classes.ratio}
            >
                {(optionVotes || 0) / 2 * 100}%
            </span>
        </div>
    )
}
