import React from 'react'
import FormikControl from './FormikControl';

const LoopOnInputs = (props) =>
{
    const { inputs, disabled } = props;
    return (
        inputs.map(({ name, ...input }) => (
            <FormikControl
                key={name}
                name={name}
                disabled={disabled}
                {...input}
            />
        ))
    )
}

export default LoopOnInputs