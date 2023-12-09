import React from 'react'
import { HeaderText, IllustrationSection } from '../../../components/ui'
import classes from './Home.module.css'
import { Btn } from '../../../components/inputs'
import RecommendationList from './RecommendationList'
import { IconButton } from '@mui/material'
import messageIcon from '../../../assets/icons/message.svg'
import { Outlet, useNavigate } from 'react-router-dom'
const HomeUi = ({ handleRecommendPartner, isLoadingRecommendPartner, recommendedList, setRecommendedList }) =>
{
    const navigate = useNavigate();
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
            <div
                className={classes.right}
            >
                <IllustrationSection
                    size="small"
                    type="home"
                />
            </div>
            <IconButton
                onClick={() => navigate("chats")}
                className={classes.messageIcon}
            >
                <img src={messageIcon} alt="messageIcon" />
            </IconButton>
            <Outlet />
        </div>
    )
}

export default HomeUi