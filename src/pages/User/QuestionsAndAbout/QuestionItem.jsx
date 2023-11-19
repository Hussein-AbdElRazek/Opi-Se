import { useState } from 'react';
import
    {
        FormControl,
        FormControlLabel,
        Radio,
        RadioGroup
    } from '@mui/material'

import { HeaderText } from '../../../components/ui'
import classes from './QuestionItem.module.css'
import checkedIcon from '../../../assets/icons/checked.svg'

const QuestionItem = () =>
{
    const [value, setValue] = useState('');

    const handleChange = (event) =>
    {
        setValue(event.target.value);
    };
    return (
        <div
            className={classes.question}
        >

            <HeaderText
                size="medium"
            >
                How many hours do you sleep?
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
                        ${value === "Less than 6 hours" && classes.checked}`}
                        value="Less than 6 hours"
                        control={<Radio
                            sx={{
                                color: "var(--secondary)"
                            }}
                            checkedIcon={<img src={checkedIcon} alt="checked" />}
                        />}
                        label="Less than 6 hours"

                    />
                    <FormControlLabel
                        className={`${classes.answer} 
                        ${value === "6 to 8 hours" && classes.checked}`} value="6 to 8 hours"
                        control={<Radio
                            sx={{
                                color: "var(--secondary)"
                            }}
                            checkedIcon={<img src={checkedIcon} alt="checked" />}
                        />}
                        label="6 to 8 hours"
                    />
                    <FormControlLabel
                        className={`${classes.answer} 
                        ${value === "More than 8 hours" && classes.checked}`} value="More than 8 hours"
                        control={<Radio
                            sx={{
                                color: "var(--secondary)"
                            }}
                            checkedIcon={<img src={checkedIcon} alt="checked" />}
                        />}
                        label="More than 8 hours" />
                </RadioGroup>
            </FormControl>

        </div>
    )
}

export default QuestionItem