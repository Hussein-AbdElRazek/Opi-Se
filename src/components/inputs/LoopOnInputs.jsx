import { Grid } from '@mui/material';

import { FormikControl } from './';

export const LoopOnInputs = (props) =>
{
    const { inputs, disabled } = props;
    return (
        <Grid
            container
            rowSpacing={0}
            columnSpacing={{
                xs: 0,
                sm: 0,
                md: 2,
                lg: 2,
                xl: 2
            }}
        >
            {inputs.map(({ name, size, ...input }) =>
            {
                const columns = !!size ? size : 12;
                return (
                    <Grid
                        key={name}
                        item
                        xl={columns}
                        lg={columns}
                        md={columns}
                        sm={12}
                        xs={12}
                    >
                        <FormikControl
                            name={name}
                            disabled={disabled}
                            {...input}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}