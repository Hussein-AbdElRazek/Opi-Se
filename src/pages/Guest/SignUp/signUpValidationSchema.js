import *  as Yup from 'yup';
import { emailNotValid, genderNotValid, nationalIdNotValid, passwordMatch, passwordMin, required } from '../../../assets/validationMessages/validationMessages';

export const signUpValidationSchema = Yup.object({
    userName: Yup.string()
        .required(required),
    email: Yup.string()
        .email(emailNotValid)
        .required(required),
    age: Yup.number()
        .required(required),
    gender: Yup.string()
        .matches(/^(male|female)$/, genderNotValid)
        .required(required),
    location: Yup.string()
        .required(required),
    nationalId: Yup.string()
        .matches(/^\d{14}$/, nationalIdNotValid)
        .required(required),
    password: Yup.string()
        .min(8, passwordMin)
        .required(required),
    confirmPassword: Yup.string()
        .required(required)
        .min(8, passwordMin)
        .oneOf([Yup.ref("password"), null], passwordMatch),
    Languages: Yup.array().of(
        Yup.object().shape({
            languageName: Yup.string()
                .required(required),
            level: Yup.number()
                .required(required),
        })
    )
});