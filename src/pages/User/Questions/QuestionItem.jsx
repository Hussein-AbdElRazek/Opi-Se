import {  useState } from 'react';
import
{
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

import { HeaderText } from '../../../components/ui'
import classes from './QuestionItem.module.css'
import checkedIcon from '../../../assets/icons/checked.svg'
import { authActions } from '../../../store/auth-slice';

const QuestionItem = ({ question, questionIndex }) =>
{
    const questions = useSelector(state => state.auth.userData?.questions) || [];
    const initialValue = questions[questionIndex]?.answer;
    const [value, setValue] = useState(initialValue || '');
    const dispatch = useDispatch();

    const handleChange = (event) =>
    {
        setValue(event.target.value);
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex] = { question, answer: event.target.value }
        dispatch(authActions.updateUserData({ questions: updatedQuestions }))
    };

    return (
        <div
            className={classes.question}
        >

            <HeaderText
                size="medium"
            >
                {question}
            </HeaderText>
            <FormControl
                className={`w-100
                ${classes.group}
                `}
            >
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        className={`${classes.answer} 
                        ${value === "Yes" && classes.checked}`}
                        value="Yes"
                        control={<Radio
                            sx={{
                                color: "var(--secondary)"
                            }}
                            checkedIcon={<img src={checkedIcon} alt="checked" />}
                        />}
                        label="Yes"
                    />
                    <FormControlLabel
                        className={`${classes.answer} 
                        ${value === "No" && classes.checked}`}
                        value="No"
                        control={<Radio
                            sx={{
                                color: "var(--secondary)"
                            }}
                            checkedIcon={<img src={checkedIcon} alt="checked" />}
                        />}
                        label="No"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default QuestionItem