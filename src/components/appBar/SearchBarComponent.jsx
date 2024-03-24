import { CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material'
import { Field } from 'formik'

import classes from './styles/SearchBar.module.css'
import { FormikContainer } from '../inputs'
import searchIcon from '../../assets/icons/search.svg'

export const SearchBarComponent = (props) =>
{
    const {
        handleSearchForPartner,
        isLoadingSearchForPartner,
        fullWidth,
    } = props;
    return (
        <FormikContainer
            initialValues={{ userId: "" }}
            onSubmit={handleSearchForPartner}
        >
            <Field name="userId">
                {({ field }) => (
                    <TextField
                        variant='standard'
                        className={`${classes.searchInput} ${fullWidth ? classes.full : ""}`}
                        name="userId"
                        placeholder="Search your study partner..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                >
                                    {isLoadingSearchForPartner ?
                                        <CircularProgress size={20} sx={{ margin: 1, color: "var(--secondary)" }} /> :
                                        <IconButton
                                            sx={{
                                                marginRight: 1,
                                                padding: 0,
                                            }}
                                            type='submit'
                                            disabled={isLoadingSearchForPartner || field.value.trim() === ""}
                                            title="Search..."
                                        >
                                            <img
                                                src={searchIcon}
                                                alt='search icon'
                                            />
                                        </IconButton>}
                                </InputAdornment>
                            ),
                        }}
                        disabled={isLoadingSearchForPartner}
                        title='Search your study partner...'
                        {...field}
                    />
                )}
            </Field>
        </FormikContainer>
    )
}
