import Pagination from './Pagination'
import RecommendationItem from './RecommendationItem'
import homeClasses from '../Home.module.css'
import { LoadingCenter } from '../../../../components/ui'
import classes from './RecommendationListUi.module.css'
import recommendationBackground from '../../../../assets/images/homeBackground.png'

const RecommendationListUi = ({ recommendedList, isLoadingRecommendPartner }) =>
{
    return (
        <div className={`${homeClasses.container} ${classes.container}`}>
            <div className={`${homeClasses.left} ${classes.left}`}>
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
                className={`${homeClasses.right} ${classes.right}`}
            >
                <p>
                    Empower your learning journey
                    <br />
                    by choosing the perfect
                    <br />
                    study partner!
                </p>
                <img src={recommendationBackground} alt=""  />
            </div>
        </div>
    )
}

export default RecommendationListUi