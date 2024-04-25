import { FieldArray } from 'formik'
import { Grid } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import
{
    FormikControl,
    ArrayIconBtn
} from './';
export const InputArray = (props) =>
{
    const { name, inputs, intialObject, disabled } = props;

    const addOne = (push) => () =>
    {
        push(intialObject)
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
                        <Grid
                            container
                            rowSpacing={0}
                            columnSpacing={{
                                xs: 2,
                                sm: 2,
                                md: 2,
                                lg: 2,
                                xl: 2
                            }}
                            key={index}
                        >
                            {inputs.map(({ size, sm,xs, ...input }) => 
                            {
                                const columns = size ? size : 4
                                return (
                                    <Grid
                                        key={`${name}.${index}.${input.name}`}
                                        item
                                        md={columns}
                                        sm={sm}
                                        xs={xs}
                                    >
                                        <FormikControl
                                            {...input}
                                            name={`${name}.${index}.${input.name}`}
                                            disabled={disabled}
                                        />
                                    </Grid>
                                )
                            }
                            )}

                            <Grid
                                item
                                md={2}
                                sm={3}
                                xs={5}
                            >
                                {/* Add Btn */}
                                <ArrayIconBtn
                                    title="Add one"
                                    onClick={addOne(push)}
                                    disabled={disabled}
                                >
                                    <AddRoundedIcon />
                                </ArrayIconBtn>
                                {/* Remove Btn */}
                                {index !== 0 && (
                                    <ArrayIconBtn
                                        title="Remove"
                                        onClick={removeOne(remove, index)}
                                        disabled={disabled}
                                    >
                                        <RemoveRoundedIcon />
                                    </ArrayIconBtn>
                                )}
                            </Grid>
                        </Grid>
                    ))
                )
            }}
        </FieldArray>
    )
}