import React from 'react'
import classes from './RecommendationItem.module.css'
import { Button } from '@mui/material';
const RecommendationItem = ({ userData }) =>
{
    const isHavePic = userData.profileImage !== "default.png";

    return (
        <div
            className={classes.item}
        >
            {isHavePic ? (
                <img src={userData.profileImage} alt="profileImage" />

            ) : (
                <h4>
                    {userData.userName[0].toUpperCase()}
                </h4>
            )}

            <div
                className={classes.about}
            >
                <h3>
                    {userData.userName}
                </h3>
                <p>
                    field
                </p>
                <p>
                    {userData.age} Years    
                </p>
            </div>
            <div
                className={classes.action}
            >
                <Button>
                    Take First Step
                </Button>
            </div>
        </div>
    )
}

export default RecommendationItem