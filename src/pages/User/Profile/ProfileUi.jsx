import { CircularProgress, IconButton } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { ProfilePic } from '../../../components/ui'
import classes from './Profile.module.css'
import { Btn, Skills } from '../../../components/inputs'
import copyIcon from '../../../assets/icons/copy.svg'
import ChangeProfilePic from './components/ChangeProfilePic'
import ActionsLayout from './components/ActionsLayout';
import MyPartnerActions from './components/MyPartnerActions';
import MatchRequestActions from './components/MatchRequestActions';
import RecommendationActions from './components/RecommendationActions';
import { ReactComponent as ReportIcon } from '../../../assets/icons/report.svg';
import AlreadyRequestedLabel from './components/AlreadyRequestedLabel';
import NoData from './components/NoData';

const ProfileUi = (props) =>
{
    const {
        profileData,
        isMyProfile,
        isMyPartner,
        from,
        havePartner,
        currentUrl,
        onCopy,
        handleChangeProfilePic,
        isLoadingChangeProfilePic
    } = props;

    return (
        <>
            <div
                className={classes.cover}
            >
                {/* Profile pic */}
                <div
                    className={classes.pic}
                >
                    {isLoadingChangeProfilePic && <div className={classes.loading}><CircularProgress thickness={2} /></div>}
                    <ProfilePic
                        userName={profileData?.userName}
                        profileImage={profileData?.profileImage}
                    />
                    {isMyProfile &&
                        <ChangeProfilePic
                            handleChangeProfilePic={handleChangeProfilePic}
                            isLoadingChangeProfilePic={isLoadingChangeProfilePic}
                        />}
                </div>

                {/* My Report Btn for user*/}
                {(profileData?.role === 'user' && isMyProfile) && (
                    <ActionsLayout>
                        <Btn
                            to={`https://userdashboard-cv8d.onrender.com/${profileData?.nationalId}`}
                            startIcon={<ReportIcon />}
                            target="_blank"
                            className={classes.reportBtn}
                        >
                            My Report
                        </Btn>
                    </ActionsLayout>
                )}

                {/* MyPartnerActions unMatch, message */}
                {isMyPartner && <MyPartnerActions userData={profileData} />}

                {/* For when come from match requests*/}
                {(profileData?.alreadyRequestedMe && !isMyPartner) &&
                    <MatchRequestActions requestData={profileData} />}

                {/* For anyone not me when doesn't have partner*/}
                {(!havePartner && !isMyProfile && from !== "matchRequests" && !!profileData?.isAvailable && !profileData?.alreadyRequestedHim && !profileData?.alreadyRequestedMe)
                    && <RecommendationActions />}

                {/* For already requested him */}
                {(!isMyProfile && profileData?.alreadyRequestedHim && !isMyPartner) && (
                    <AlreadyRequestedLabel />
                )}

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

                <Grid2
                    container
                    rowSpacing={2}
                    columnSpacing={{ lg: 4, md: 4, sm: 0, xs: 0 }}
                    alignContent={"flex-start"}
                    alignItems={"flex-start"}
                >
                    {/* About (Bio)*/}
                    <Grid2
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <div className={classes.card} >
                            <h6>
                                About me
                            </h6>
                            {profileData?.bio ?
                                (
                                    <p>
                                        {profileData.bio}
                                    </p>
                                ) :
                                (
                                    <NoData >
                                        No About, yet
                                    </NoData>
                                )
                            }
                        </div>
                    </Grid2>

                    {/* MENTOR Experience */}
                    {profileData?.role === 'mentor' && (
                        <Grid2
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <div className={classes.card} >
                                <h6>
                                    Experience
                                </h6>
                                {profileData?.experience?.length ?
                                    (
                                        <p>
                                            have experience
                                        </p>
                                    ) :
                                    (
                                        <NoData >
                                            No Experience, yet
                                        </NoData>
                                    )
                                }
                            </div>
                        </Grid2>
                    )}

                    {/* MENTOR Certifications */}
                    {profileData?.role === 'mentor' && (
                        <Grid2
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <div className={classes.card} >
                                <h6>
                                    Certifications
                                </h6>
                                {profileData?.certificates?.length ?
                                    (
                                        <p>
                                            have certificates
                                        </p>
                                    ) :
                                    (
                                        <NoData >
                                            No Certifications, yet
                                        </NoData>
                                    )
                                }
                            </div>
                        </Grid2>
                    )}

                    {/* Skills */}
                    <Grid2
                        md={6}
                        sm={12}
                        xs={12}
                        container
                        rowSpacing={2}
                        columnSpacing={{ lg: 4, md: 4, sm: 0, xs: 0 }}
                    >
                        <Grid2
                            md={12}
                            sm={12}
                            xs={12}
                            className={classes.skills}
                        >
                            <div className={classes.card}>
                                <h6>
                                    Skills
                                </h6>
                                {(!profileData?.userSkills?.length) && <NoData >No Skills, yet</NoData>}
                                <Skills disabled={true} skillsInitial={profileData?.userSkills} />
                            </div>
                        </Grid2>

                        {/* Copy id section */}
                        <Grid2
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            <div className={`${classes.card} ${classes.idContainer}`}>
                                <div className={classes.idContent}>
                                    <span >
                                        {"Id: "}
                                    </span>
                                    {currentUrl}
                                </div>

                                <CopyToClipboard text={currentUrl} >
                                    <IconButton
                                        onClick={onCopy}
                                    >
                                        <img src={copyIcon} alt="copy icon" />
                                    </IconButton>
                                </CopyToClipboard>
                            </div>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </div >
        </>
    )
}

export default ProfileUi