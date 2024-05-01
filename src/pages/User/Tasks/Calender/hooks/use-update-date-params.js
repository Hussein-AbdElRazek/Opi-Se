import { useSearchParams } from 'react-router-dom';

const useUpdateDateParams = () =>
{
    const [searchParams, setSearchParams] = useSearchParams();
    const updateParams = (date) =>
    {
        if (!date) return; // Handle case where no date is provided

        const newYear = String(date.getFullYear());
        const newMonth = String(date.getMonth())
        if (searchParams.get("m") !== newMonth)
            setSearchParams({
                y: newYear,
                m: newMonth,
            });
    }
    
    return { updateParams }
}

export default useUpdateDateParams