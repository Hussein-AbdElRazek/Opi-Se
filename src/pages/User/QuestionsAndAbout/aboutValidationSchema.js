import *  as Yup from 'yup';
import { required } from '../../../assets/validationMessages/validationMessages';

export const aboutValidationSchema = Yup.object({
    fieldOfStudy: Yup.string()
        .required(required),
    specialization: Yup.string()
        .required(required),
});