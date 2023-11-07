import { Form, Formik } from "formik";

export const FormikContainer = (props) =>
{
    const {
        initialValues,
        validationSchema,
        onSubmit,
        enableReinitialize,
        children } = props;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={enableReinitialize}
        >
            {(formik) =>
                <Form >
                    {children}
                </Form>
            }
        </Formik>
    );
}