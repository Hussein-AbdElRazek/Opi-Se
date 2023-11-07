import { FieldArray } from 'formik'
import { Grid } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import
{
    FormikControl,
    OutlinedIconBtn
} from './';
export const InputArray = (props) =>
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
                            {inputs.map(({ size, ...input }) => 
                            {
                                const columns = size ? size : 4
                                return (
                                    <Grid
                                        key={`${name}.${index}.${input.name}`}
                                        item
                                        xl={columns}
                                        lg={columns}
                                        md={columns}
                                        sm={12}
                                        xs={12}
                                    >
                                        <FormikControl
                                            {...input}
                                            name={`${name}.${index}.${input.name}`}
                                        />
                                    </Grid>
                                )
                            }
                            )}
                            {/* Add Btn */}

                            <Grid
                                item
                                xl={1.5}
                                lg={1.5}
                                md={1.5}
                                sm={6}
                                xs={6}
                            >
                                <OutlinedIconBtn
                                    title="Add one"
                                    onClick={addOne(push, form.initialValues[name][0])}
                                >
                                    <AddRoundedIcon />
                                </OutlinedIconBtn>
                            </Grid>

                            {/* Remove Btn */}
                            {index !== 0 && (
                                <Grid
                                    item
                                    xl={1.5}
                                    lg={1.5}
                                    md={1.5}
                                    sm={6}
                                    xs={6}
                                >
                                    <OutlinedIconBtn
                                        title="Remove"
                                        onClick={removeOne(remove, index)}
                                    >
                                        <RemoveRoundedIcon />
                                    </OutlinedIconBtn>
                                </Grid>
                            )}
                        </Grid>
                    ))
                )
            }}
        </FieldArray>
    )
}