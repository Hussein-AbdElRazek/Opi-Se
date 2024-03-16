import *  as Yup from 'yup';
import
{
    required
} from '../../assets/validationMessages/validationMessages';

export const noteValidationSchema = Yup.object({
    noteTitle: Yup.string()
        .required(required),
    noteContent: Yup.string()
        .required(required),
    noteColor: Yup.string()
        .required(required),
});