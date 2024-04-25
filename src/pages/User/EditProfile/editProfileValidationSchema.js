import *  as Yup from 'yup';
import
{
    aboutMax,
    ageMax,
    ageMin,
    emailNotValid,
    required
} from '../../../assets/validationMessages/validationMessages';

export const editProfileValidationSchema = Yup.object({
    userName: Yup.string()
        .required(required),
    email: Yup.string()
        .email(emailNotValid)
        .required(required),
    age: Yup.number()
        .min(10, ageMin)
        .max(60, ageMax)
        .required(required),
    Languages: Yup.array().of(
        Yup.object().shape({
            languageName: Yup.string()
                .required(required),
            level: Yup.number()
                .required(required),
        })
    ),
    bio: Yup.string()
        .max(1000, aboutMax),
    fieldOfStudy: Yup.string()
        .required(required),
    specialization: Yup.string()
        .required(required),
    userSkills: Yup.array().of(
        Yup.object().shape({
            skillName: Yup.string()
                .required(required),
            skillRate: Yup.number()
                .required(required),
        })
    )
});