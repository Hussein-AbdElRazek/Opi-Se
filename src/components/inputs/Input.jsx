import React from "react";
import { ErrorMessage, Field } from "formik";
import { FormControl, InputBase, InputLabel } from "@mui/material";
import classes from './styles/Input.module.css'
import InputError from "./InputError";
const Input = (props) =>
{
    const {
        label,
        name,
        type,
        disabled,
        dir,
        ...rest
    } = props;

    return (
        <Field
            name={name} >
            {({ field, meta: { touched, error } }) =>
            {
                const inputError = !!error && touched;
                return (
                    <FormControl
                        className={classes.input}
                        variant="filled"
                        fullWidth
                        disabled={disabled}
                        dir={dir}
                    >
                        <InputLabel
                            className={dir === "rtl" ? classes.labelArabic : classes.labelEnglish}
                            shrink
                            htmlFor={name}
                        >
                            {label}
                        </InputLabel>
                        <InputBase
                            name={name}
                            id={name}
                            type={type}
                            label={label}
                            className={inputError ? classes.errorBorder : null}
                            {...field}
                            {...rest}
                            sx={{
                                backgroundColor: "var(--semi-dark-black)",
                                borderRadius: "var(--border-radius-inputs)"
                            }}
                        />
                        <ErrorMessage
                            name={name}
                            component={InputError}
                        />
                    </FormControl>
                );
            }}
        </Field >
    );
}

export default Input;
