import { Grid, IconButton } from '@mui/material'
import { useSnackbar } from 'notistack';
import { NavLink } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Card, ProfilePic } from '../../../components/ui'
import classes from './Profile.module.css'
import { Btn, Skills } from '../../../components/inputs'
import copyIcon from '../../../assets/icons/copy.svg'
import ChangeProfilePic from './components/ChangeProfilePic'
import ActionsLayout from './components/ActionsLayout';
import MyPartnerActions from './components/MyPartnerActions';
import MatchRequestActions from './components/MatchRequestActions';
import RecommendationActions from './components/RecommendationActions';

const ProfileUi = (props) =>
{
    const {
        profileData,
        isMyProfile,
        isMyPartner,
        from
    } = props;
    const currentUrl = window.location.href;

    const { enqueueSnackbar: popMessage } = useSnackbar();
    const onCopy = () =>
    {
        popMessage("Copied successfully")
    }

    return (
        <>
            <div
                className={classes.cover}
            >
                {/* Profile pic */}
                <div
                    className={classes.pic}
                >
                    <ProfilePic
                        userName={profileData?.userName}
                        profileImage={profileData?.profileImage}
                    />
                    {isMyProfile && <ChangeProfilePic />}
                </div>

                {/* Edit Profile Btn*/}
                {isMyProfile && (
                    <ActionsLayout>
                        <NavLink
                            to="/profile/edit"
                        >
                            <Btn>
                                Edit Profile
                            </Btn>
                        </NavLink>
                    </ActionsLayout>
                )}

                {/* MyPartnerActions unMatch, message */}
                {isMyPartner && <MyPartnerActions userData={profileData} />}

                {/* For when come from match requests*/}
                {from === "matchRequests" && <MatchRequestActions requestData={profileData} />}

                {/* For when come from recommendation list*/}
                {from === "recommendation" && <RecommendationActions />}
            </div>
            <div
                className={classes.content}
            >
                {/* User data section */}
                <div
                    className={classes.userData}
                >
                    <h4>
                        {profileData.userName}
                    </h4>
                    {profileData.specialization && (
                        <p>
                            {profileData.specialization}
                        </p>
                    )}

                    <p>
                        {profileData.age} Years
                    </p>
                    <p>
                        {profileData.location}
                    </p>
                </div>

                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={{
                        xs: 2,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2
                    }}
                >
                    {/* Skills */}
                    <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        className={classes.skills}
                    >
                        <Card>
                            <h6>
                                Skills
                            </h6>
                            <Skills disabled={true} skillsInitial={profileData?.userSkills} />
                        </Card>
                    </Grid>

                    {/* Copy id section */}
                    <Grid
                        item
                        md={6}
                        sm={12}
                        className={classes.id}
                    >
                        <Card>
                            <div
                                className={classes.idContainer}
                            >
                                <span className={classes.idContent}>
                                    Id: {currentUrl}
                                </span>
                                <CopyToClipboard text={currentUrl} >
                                    <IconButton
                                        onClick={onCopy}
                                    >
                                        <img src={copyIcon} alt="copy icon" />
                                    </IconButton>
                                </CopyToClipboard>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProfileUi