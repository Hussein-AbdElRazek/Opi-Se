import { useSearchParams } from "react-router-dom";

const useStepper = () =>
{
    const [searchParams, setSearchParams] = useSearchParams();;
    const currentStep = Number(searchParams.get("step")) || 1;

    const handleNext = () =>
    {
        setSearchParams({ step: currentStep + 1 });
    };

    return {
        handleNext,
        currentStep,
    }
}

export default useStepper;