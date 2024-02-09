import { Pagination as PaginationComponent } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import classes from './Pagination.module.css';

const Pagination = () =>
{
    const [searchParams, setSearchParams] = useSearchParams();;

    const initialPage = Number(searchParams.get("p")) || 1;
    const [page, setPage] = useState(initialPage);

    const initialLimit = Number(Number(searchParams.get("l"))) || 1;
    const [limit, setLimit] = useState(initialLimit);

    const handleChange = (event, value) =>
    {
        setSearchParams({ l: searchParams.get("l") || 1, p: value });
        setPage(value);
    };

    useEffect(() =>
    {
        if (limit !== Number(searchParams.get("l")) || 1) setLimit(Number(searchParams.get("l")) || 1);
    }, [limit, searchParams])

    return (
        <PaginationComponent
            className={classes.pagination}
            count={limit}
            page={page}
            onChange={handleChange}
            // handle active btn
            sx={{
                "& .Mui-selected": {
                    backgroundColor: "var(--secondary) !important",
                    color: "var(--primary) !important",
                }
            }}
        />
    )
}

export default Pagination