import { InputBase } from '@mui/material'
import { Field } from 'formik'

import classes from './styles/SearchBar.module.css'
import { FormikContainer } from '../inputs'
import searchIcon from '../../assets/icons/search.svg'
export const SearchBarUi = () =>
{
    return (
        <div

        >
            <FormikContainer
                initialValues={{ searchValue: "" }}
            // validationSchema={searchValidationSchema}
            // onSubmit={handleSearch}
            >
                <Field name="searchValue">
                    {({ field }) => (
                        <InputBase
                            className={classes.searchInput}
                            name="searchValue"
                            placeholder="Search your study partner..."
                            startAdornment={<img src={searchIcon} alt='search icon' />}
                            {...field}
                        />
                    )}
                </Field>

            </FormikContainer>
        </div>
    )
}
