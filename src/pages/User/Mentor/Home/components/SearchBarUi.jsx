import { Field } from 'formik';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import { FormikContainer } from '../../../../../components/inputs';
import { ReactComponent as SearchIcon } from '../../../../../assets/icons/searchMentor.svg'
import { ReactComponent as SubmitIcon } from '../../../../../assets/icons/arrowRight.svg'
import classes from './styles/SearchBar.module.css'
import SearchResult from './SearchResult';
import { useRef } from 'react';

const SearchBarUi = (props) =>
{
    const { handleSearch, isLoadingSearch } = props;
    const anchorRef = useRef(null);
    return (
        <div className='w-100' ref={anchorRef} style={{position:"relative"}}>
            <FormikContainer
                initialValues={{ userId: "" }}
                onSubmit={handleSearch}
            >
                <Field name="userId">
                    {({ field }) => (
                        <TextField
                            variant='standard'
                            className={classes.searchInput}
                            name="userId"
                            placeholder="Search by topic, tags"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className={classes.inputAdornment}
                                    >
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <IconButton
                                        type="submit"
                                        className={classes.submitBtn}
                                    >
                                        <InputAdornment
                                            position="center"
                                            className={classes.submitIcon}
                                        >
                                            <SubmitIcon />
                                        </InputAdornment>
                                    </IconButton>
                                ),

                            }}
                            disabled={isLoadingSearch}
                            title='Search by topic, tags'
                            {...field}
                        />
                    )}
                </Field>
            </FormikContainer>
            <SearchResult anchorRef={anchorRef} />

        </div>
    )
}

export default SearchBarUi