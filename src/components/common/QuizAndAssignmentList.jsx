import { QuizAndAssignmentElement } from './QuizAndAssignmentElement'

export const QuizAndAssignmentList = ({ list, type }) =>
{
    return (
        <div>
            {list.map(element => <QuizAndAssignmentElement {...element} type={type} />)}
        </div>
    )
}
