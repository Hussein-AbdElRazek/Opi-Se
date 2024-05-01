import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import useUpdateDateParams from './use-update-date-params';

const useDate = () =>
{
    const [searchParams] = useSearchParams();
    const { updateParams } = useUpdateDateParams();
    const mm = searchParams.get("m");
    const yy = searchParams.get("y");
    const date = (mm && yy) ? new Date(yy, mm, 1) : new Date();
    const [selectedDate, setSelectedDate] = useState(date);

    const handleDateSelect = (newValue, type) =>
    {
        updateParams(type === "mob" ? newValue._d : newValue)
        setSelectedDate(type === "mob" ? newValue._d : newValue);
    };

    useEffect(() =>
    {
        const m = searchParams.get("m");
        const y = searchParams.get("y");
        if (m && y)
        {
            const newValue = new Date(y, m, 1)
            const selectedMonth = String(selectedDate.getMonth())
            if (m !== selectedMonth)
            {
                setSelectedDate(newValue)
            }
        }
    }, [searchParams, selectedDate])

    return {
        selectedDate,
        handleDateSelect,
    }
}

export default useDate