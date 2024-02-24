import React from 'react'
import { PollOption } from './PollOption';
import { getTypingDirection } from '../../helpers/getTypingDirection';

export const PollMessage = ({ pollMessage, messageSendType }) =>
{
    const { pollQuestion, pollAnswers } = pollMessage;
    const textDirection = getTypingDirection(pollQuestion);

    return (
        <div>
            <p
                style={{
                    marginTop: '0',
                    direction: textDirection,
                    textAlign: textDirection === "rtl" ? "right" : "left"
                }}
            >
                {pollQuestion}
            </p>
            {pollAnswers.map((answer) => (
                <PollOption
                    key={answer.optionNumber}
                    {...answer}
                />
            ))}
        </div>
    )
}
