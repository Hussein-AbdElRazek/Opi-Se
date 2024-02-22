import *  as Yup from 'yup';
import
{
    ageMax,
    ageMin,
    number,
    required
} from '../../../../assets/validationMessages/validationMessages';

export const firstSectionValidationSchema = Yup.object({
    age: Yup.number()
        .typeError(number)
        .min(10, ageMin)
        .max(60, ageMax)
        .required(required),
    gender: Yup.string()
        .required(required),
    education: Yup.string()
        .required(required),
    employed: Yup.string()
        .required(required),
    income: Yup.number()
        .typeError(number)
        .required(required),
    gap_in_resume: Yup.string()
        .required(required),
    pc: Yup.string()
        .required(required),
    internet_access: Yup.string()
        .required(required),
    live_with_parents: Yup.string()
        .required(required),
    read_out: Yup.string()
        .required(required),
    disabled: Yup.string()
        .required(required),
    mental_illness_b4: Yup.string()
        .required(required),
    times_hosp: Yup.number()
        .typeError(number)
        .required(required),
    days_hosp: Yup.number()
        .typeError(number)
        .required(required),
});

export const secondSectionValidationSchema = Yup.object({
    anxiety1: Yup.string()
        .required(required),
    anxiety2: Yup.string()
        .required(required),
    anxiety3: Yup.string()
        .required(required),
    depression1: Yup.string()
        .required(required),
    depression2: Yup.string()
        .required(required),
    lack_of_concentration1: Yup.string()
        .required(required),
    lack_of_concentration2: Yup.string()
        .required(required),
    obsessive_thinking1: Yup.string()
        .required(required),
    obsessive_thinking2: Yup.string()
        .required(required),
    mood_swing1: Yup.string()
        .required(required),
    mood_swing2: Yup.string()
        .required(required),
    panic_attacks: Yup.string()
        .required(required),
    compulsive_behavior1: Yup.string()
        .required(required),
    compulsive_behavior2: Yup.string()
        .required(required),
    tiredness1: Yup.string()
        .required(required),
    tiredness2: Yup.string()
        .required(required),
});

export const thirdSectionValidationSchema = Yup.object({
    response1: Yup.string()
        .required(required),
    response2: Yup.string()
        .required(required),
    response3: Yup.string()
        .required(required),
    response4: Yup.string()
        .required(required),
});