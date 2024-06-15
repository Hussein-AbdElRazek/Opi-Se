import { IconButton } from '@mui/material'
import { useSnackbar } from 'notistack';
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

const ProfileUi = (props) =>
{
    const {
        profileData,
        isMyProfile,
        isMyPartner,
        from,
        havePartner,
    } = props;

    const { enqueueSnackbar: popMessage } = useSnackbar();

    const currentUrl = window.location.href;
    const haveBio = profileData.bio && profileData.bio !== "blank"

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

                {/* My Report Btn*/}
                {isMyProfile && (
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
                {(from === "matchRequests" && !isMyProfile) && <MatchRequestActions requestData={profileData} />}

                {/* For when come from recommendation list*/}
                {(from === "recommendation" && !isMyProfile) && <RecommendationActions />}

                {/* For anyone not me when doesn't have partner*/}
                {(!havePartner && !isMyProfile && from !== "recommendation" && from !== "matchRequests" && !!profileData?.isAvailable) && <RecommendationActions />}
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
                    columnSpacing={{ lg: haveBio ? 4 : 0, md: haveBio ? 4 : 0, sm: 0, xs: 0 }}
                    alignContent={"flex-start"}
                    alignItems={"flex-start"}
                >
                    {/* About */}
                    {haveBio && <Grid2
                        md={6}
                        sm={12}
                        xs={12}
                        className={classes.about}
                    >
                        <div className={classes.card} >
                            <h6>
                                About me
                            </h6>
                            <p>
                                {profileData.bio}
                            </p>
                        </div>
                    </Grid2>}

                    {/* Skills */}
                    <Grid2
                        md={haveBio ? 6 : 12}
                        sm={12}
                        xs={12}
                        container
                        rowSpacing={2}
                        columnSpacing={{ lg: 4, md: 4, sm: 0, xs: 0 }}
                    >
                        <Grid2
                            md={haveBio ? 12 : 6}
                            sm={12}
                            xs={12}
                            className={classes.skills}
                        >
                            <div className={classes.card}>
                                <h6>
                                    Skills
                                </h6>
                                <Skills disabled={true} skillsInitial={profileData?.userSkills} />
                            </div>
                        </Grid2>

                        {/* Copy id section */}
                        <Grid2
                            md={haveBio ? 12 : 6}
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
            </div>
        </>
    )
}

export default ProfileUi