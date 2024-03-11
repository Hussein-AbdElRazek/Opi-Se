import { PollOption } from './PollOption';
import { getTypingDirection } from '../../helpers/getTypingDirection';

export const PollMessage = ({ pollMessage, messageSendType, messageId }) =>
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
                // TODO remove after bug in back in selecet options  answer?.optionNumber && (

                answer?.optionContent && (
                    <PollOption
                        key={answer?.optionNumber}
                        pollAnswers={pollAnswers}
                        messageId={messageId}
                        {...answer}
                    />
                )
            ))}
        </div>
    )
}
