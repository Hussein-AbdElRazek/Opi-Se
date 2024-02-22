import { BooleanQuestion } from './BooleanQuestion';
import { MCQ } from './MCQ';
import { TextareaQuestion } from './TextareaQuestion';

export const QuestionControl = (props) =>
{
    const { control,  ...rest } = props;
    switch (control)
    {
        case "textarea":
            return <TextareaQuestion {...rest} />;
        case "boolean":
            return <BooleanQuestion {...rest} />;
        case "mcq":
            return <MCQ {...rest} />;
        default:
            return null;
    }
}
