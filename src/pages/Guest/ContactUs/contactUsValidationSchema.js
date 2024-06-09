import *  as Yup from 'yup';
import
{
    messageMax,
    emailNotValid,
    required
} from '../../../assets/validationMessages/validationMessages';

export const contactUsValidationSchema = Yup.object({
    name: Yup.string()
        .required(required),
    email: Yup.string()
        .email(emailNotValid)
        .required(required),
    message: Yup.string()
        .max(1000, messageMax)
        .required(required),
});