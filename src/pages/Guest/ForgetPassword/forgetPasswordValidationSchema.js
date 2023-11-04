import *  as Yup from 'yup';

export const forgetPasswordValidationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email")
        .required("Required"),
});