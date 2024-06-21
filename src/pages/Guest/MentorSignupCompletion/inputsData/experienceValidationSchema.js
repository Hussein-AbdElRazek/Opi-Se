import *  as Yup from 'yup';

import
{
    required
} from '../../../../assets/validationMessages/validationMessages.js';

export const experienceValidationSchema = Yup.object({
    title: Yup.string()
        .required(required),
    employmentType: Yup.string()
        .required(required),
    companyName: Yup.string()
        .required(required),
    startDate: Yup.date()
        .required(required),
    endDate: Yup.date()
        .required(required),
});