import *  as Yup from 'yup';
import { required } from '../../assets/validationMessages/validationMessages';

export const pollValidationSchema = Yup.object({
    pollQuestion: Yup.string()
        .required(required),
    pollAnswers: Yup.array().of(
        Yup.object().shape({
            optionContent: Yup.string()
                .required(required),
        }).required(required)
    ),
});

