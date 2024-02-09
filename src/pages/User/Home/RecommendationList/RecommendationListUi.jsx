import Pagination from './Pagination'
import RecommendationItem from './RecommendationItem'
import homeClasses from '../Home.module.css'
import { IllustrationSection, LoadingCenter } from '../../../../components/ui'
import classes from './RecommendationListUi.module.css'
const RecommendationListUi = ({ recommendedList, isLoadingRecommendPartner }) =>
{
    return (
        <div className={homeClasses.container}>
            <div className={homeClasses.left}>
                {recommendedList.map((item) => (
                    <RecommendationItem
                        key={item._id}
                        userData={item}
                    />
                ))}

                {isLoadingRecommendPartner ?
                    <div className={classes.loading}><LoadingCenter /> </div> :
                    <Pagination />}
            </div>
            
            <div
                className={homeClasses.right}
            >
                <IllustrationSection
                    size="small"
                    type="home"
                />
            </div>
        </div>
    )
}

export default RecommendationListUi