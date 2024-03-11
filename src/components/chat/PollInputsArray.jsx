import { FieldArray } from 'formik'
import { IconButton } from '@mui/material';

import { FormikControl } from '../inputs';
import { ReactComponent as PollOptionIcon } from '../../assets/icons/pollOption.svg'
import { ReactComponent as AddOptionIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as TrueMarkIcon } from '../../assets/icons/trueMark.svg'
import classes from './styles/PollInputsArray.module.css'
export const PollInputsArray = (props) =>
{
    const { disabled } = props;
    const name = "pollAnswers";

    const addOne = (push, length) => () =>
    {
        push(
            {
                "optionNumber": length ,
                "optionContent": ""
            }
        )
    }

    // To check if no value and third option then remove it
    const handleChangeOptionValue = (e, formik, index, remove) =>
    {
        const newValue = e.target.value;
        if (index > 0
            && !newValue.trim())
        {
            remove(index)
        }
    }

    return (
        <div>
            <FieldArray
                name={name}
            >
                {({ remove, push, form }) =>
                {
                    return (
                        form.values[name].map((input, index) =>
                        {
                            return (
                                <div
                                    key={`${name}.${index}.optionContent`}
                                >
                                    <div className={classes.row}>
                                        <div className={classes.input}>
                                            <FormikControl
                                                control='input'
                                                type='text'
                                                name={`${name}.${index}.optionContent`}
                                                placeholder={`Option ${index + 1}`}
                                                disabled={disabled}
                                                startAdornment={<PollOptionIcon />}
                                                onChange={(e) => { handleChangeOptionValue(e, form, index, remove) }}
                                            />
                                        </div>

                                        {/* Add Btn + Send btn*/}
                                        {index === form.values[name].length - 1 && (
                                            <>
                                                <IconButton
                                                    title="Send"
                                                    disabled={disabled}
                                                    className={classes.icon}
                                                    type='submit'
                                                >
                                                    <TrueMarkIcon />
                                                </IconButton>
                                                <IconButton
                                                    title="Add one"
                                                    onClick={addOne(push, form.values[name].length)}
                                                    disabled={disabled}
                                                    className={classes.icon}
                                                >
                                                    <AddOptionIcon />
                                                </IconButton>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )
                        }
                        )
                    )
                }}
            </FieldArray>
        </div>

    )
}