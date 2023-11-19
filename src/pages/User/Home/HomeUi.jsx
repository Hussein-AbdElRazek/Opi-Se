import React from 'react'
import { HeaderText, IllustrationSection } from '../../../components/ui'
import classes from './Home.module.css'
import { Btn } from '../../../components/inputs'
import RecommendationList from './RecommendationList'
const HomeUi = ({ handleRecommendPartner, isLoadingRecommendPartner, recommendedList, setRecommendedList }) =>
{
    
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.left}
            >
                {recommendedList.length > 0 ? (
                    <RecommendationList recommendedList={recommendedList} setRecommendedList={setRecommendedList} />
                ) :
                    (<>
                        <HeaderText>
                            With
                            <span>
                                Opi Se
                            </span>
                            You
                            <br />
                            Can Find The
                            <br />

                            Perfect Study Partner
                        </HeaderText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        </p>
                        <div
                            className={classes.action}
                        >
                            <Btn
                                onClick={handleRecommendPartner}
                                isLoading={isLoadingRecommendPartner}
                            >
                                Get a New Brain Buddy
                            </Btn>
                        </div>
                    </>)
                }



            </div>
            <IllustrationSection
                size="small"
                type="home"
            />
        </div>
    )
}

export default HomeUi