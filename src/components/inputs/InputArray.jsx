import { Fragment } from 'react'
import { FieldArray } from 'formik'

import FormikControl from './FormikControl';

const InputArray = (props) =>
{
    const { name, inputs } = props;
    const addOne = (push, addInputs) => () =>
    {
        push(addInputs)
    }
    const removeOne = (remove, index) => () =>
    {
        remove(index)
    }
    return (
        <FieldArray
            name={name}
        >
            {({ remove, push, form }) =>
            {
                return (
                    form.values[name].map((ele, index) => (
                        <Fragment
                            key={index}
                        >
                            {inputs.map((input) => (
                                <FormikControl
                                    {...input}
                                    name={`${name}.${index}.${input.name}`}
                                    key={`${name}.${index}.${input.name}`}
                                />
                            ))}
                            <button type="button" onClick={addOne(push, form.initialValues[name][0])}>+</button>
                            <button type="button" onClick={removeOne(remove, index)}>-</button>
                        </Fragment>

                    ))
                )
            }}
        </FieldArray>
    )
}

export default InputArray