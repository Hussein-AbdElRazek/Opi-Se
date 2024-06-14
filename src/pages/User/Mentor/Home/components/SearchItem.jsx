import classes from './styles/SearchItem.module.css'
import { ProfilePic } from '../../../../../components/ui'
import { Btn } from '../../../../../components/inputs'

import { ButtonBase } from '@mui/material'

const SearchItem = ({ profileImage, userName, positionTitle }) =>
{
    return (
        <div
            className={`${classes.container} center-y w-100 `}
        >
            <ButtonBase className={`center-y ${classes.user}`}>
                <div
                    className={classes.profilePicContainer}
                >
                    <ProfilePic
                        profileImage={profileImage}
                        userName={userName}
                    />
                </div>
                <div
                    className={classes.info}
                >
                    <h6
                        title={userName}
                    >
                        {userName}
                    </h6>
                    <p
                    >
                        {positionTitle}
                    </p>
                </div>
            </ButtonBase>
            <div className={classes.action}>
                <Btn>
                    Add Mentor
                </Btn>
            </div>
        </div>
    )
}

export default SearchItem