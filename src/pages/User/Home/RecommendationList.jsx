import RecommendationItem from './RecommendationItem'
import { Button } from '@mui/material'

const RecommendationList = ({ recommendedList, setRecommendedList }) =>
{


    return (
        <div
        >
            <Button
                onClick={() => { setRecommendedList([]) }}
            >
                Back
            </Button>
            {recommendedList.map((item) => (
                <RecommendationItem
                    userData={item}
                />
            ))}
        </div>
    )
}

export default RecommendationList