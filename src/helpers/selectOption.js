// handle options answers array
export const selectOption = ( optionSelectors, pollAnswers, optionNumber, optionVotes , myId) =>
{

    const isChosen = optionSelectors?.find(selector => selector === myId);
    const tempPollAnswers = [...pollAnswers];
    const updatedPollAnswers = [];

    tempPollAnswers.forEach((pollAnswer) =>
    {
        let updatedPollAnswer = { ...pollAnswer }
        if (pollAnswer.optionNumber === optionNumber)
        {
            updatedPollAnswer.optionVotes = isChosen ? optionVotes - 1 : (optionVotes || 0 )+ 1;

            updatedPollAnswer.optionSelectors = isChosen ?
                optionSelectors.filter(selector => selector !== myId) :
                optionSelectors ?
                    [...optionSelectors, myId] :
                    [myId]
        }
        updatedPollAnswers.push(updatedPollAnswer);
    })

    return updatedPollAnswers;
}