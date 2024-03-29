import { MobileStepper, Step, StepLabel, Stepper } from '@mui/material'

import { Card } from '../../../components/ui/Card'
import { HeaderText, LoadingCenter, Paragraph } from '../../../components/ui'
import progressBg from '../../../assets/images/progressBg.svg'
import coinImg from '../../../assets/images/coin.png'
import bronzeBadge from '../../../assets/images/bronzeBadge.png'
import silverBadge from '../../../assets/images/silverBadge.png'
import goldBadge from '../../../assets/images/goldBadge.png'
import platinumBadge from '../../../assets/images/platinumBadge.png'
import BadgeItem from './components/BadgeItem'
import classes from './styles/Progress.module.css'
import FirstPlacePartners from './components/FirstPlacePartners'
import PartnersList from './components/PartnersList'
const ProgressUi = (props) =>
{
    const { userName, isLoadingGetLeaderBoard } = props;

    const badges = [
        {
            title: "Bronze",
            src: bronzeBadge,
            alt: "bronzeBadge",
        },
        {
            title: "Silver",
            src: silverBadge,
            alt: "silverBadge",
        },
        {
            title: "Gold",
            src: goldBadge,
            alt: "goldBadge",
        },
        {
            title: "Platinum",
            src: platinumBadge,
            alt: "platinumBadge",
        },
    ];

    const ranges = [
        { hours: 15 },
        { hours: 15 },
        { hours: 15 },
        { hours: 15 }
    ];

    const StepIconComponent = () => <div className={classes.circle} />

    const firstPlaceDUMMY = [
        {
            userName: "Ahmed Abdelaziz",
            badge: "Platinum",
            profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
            coins: 1940,
        },
        {
            userName: "Muhammed Atef",
            badge: "Platinum",
            profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
            coins: 2005,
        },
    ]

    const partnersDUMMY = [
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,
                order: 1
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                studyField: "Computer Sc", hours: 2005,

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                coins: 1940, studyField: "Sc", hours: 2005,
                order: 999
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005, studyField: "Computer Sc", hours: 2005,
                isMyPartnerShip: true,
            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],
        [
            {
                userName: "Ahmed Abdelaziz",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 1940,
                studyField: "Computer Sc", hours: 2005,

                order: 2
            },
            {
                userName: "Muhammed Atef",
                badge: "Platinum",
                profileImage: "http://res.cloudinary.com/dvevzyef1/image/upload/v1711598214/users%20images/652d53c6a5dad8b40f17dda2.jpg",
                coins: 2005,
                hours: 2005,
                studyField: "Computer Sc",

            },
        ],

    ]

    return (
        <div
            className={`${classes.container} space-between`}
        >
            <div
                className={classes.left}
            >
                {/* welcome card */}
                <Card
                    className={` ${classes.card} ${classes.welcome}`}
                >
                    <div>
                        <HeaderText>
                            Welcome, {userName}!
                        </HeaderText>
                        <Paragraph>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis velit voluptatibus ad maiores magnam dolorum quidem dolor! Voluptas magnam nulla repellat a quasi dolore culpa rem odit, ullam, voluptatem eos.
                        </Paragraph>
                    </div>
                    <img src={progressBg} alt="" />
                </Card>

                {/* progress card */}
                <Card className={`${classes.card} ${classes.progress}`}>
                    {/* coin row */}
                    <div
                        className={classes.coins}
                    >
                        <img src={coinImg} alt="coin" />
                        <span>
                            100 Coin
                        </span>
                    </div>

                    {/* progress row */}
                    <div
                        className={`${classes.currentProgress} space-between center-y`}
                    >
                        <img src={bronzeBadge} alt="current badge" />
                        <div
                            className={`${classes.points} w-100`}
                        >
                            <h3>
                                Study to earn your badge
                            </h3>
                            <div
                                className={classes.stepperContainer}
                            >
                                <MobileStepper
                                    variant="progress"
                                    // i add one bcs initial first step begin from zero
                                    //  and in design i begin from 1
                                    steps={10}
                                    position="static"
                                    activeStep={9}
                                    className={classes.stepper}
                                    sx={{
                                        ".MuiLinearProgress-bar": { backgroundColor: "var(--secondary)" },
                                        ".MuiLinearProgress-root": {
                                            background: "var(--stepper-bg)",
                                            width: "100%",
                                        },
                                    }}
                                />
                                <p className={classes.badgeScore}>10/10</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* badges card */}
                <Card className={`${classes.card} ${classes.badgesCard}`}>
                    <h5>
                        All Badges
                    </h5>

                    {/* badges components */}
                    <div
                        className={`${classes.badges} center-x`}
                    >
                        {/*  all badges */}
                        <div
                            className={`space-between w-100`}
                        >
                            {badges.map(badge => <BadgeItem key={badge.title} {...badge} />)}
                        </div>

                        {/* circles steps */}
                        <div
                            className={`space-between w-100`}
                        >
                            <Stepper
                                className={`w-100 ${classes.badgeStepper}`}
                                alternativeLabel
                            >
                                {ranges.map(({ hours }) => (
                                    <Step>
                                        <StepLabel
                                            className={classes.hours}
                                            StepIconComponent={StepIconComponent}
                                        >
                                            <div className={classes.hours}>
                                                {hours}H
                                            </div>
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                    </div>
                </Card>
            </div>

            {/* leader board */}
            <Card className={`${classes.card} ${classes.right}`}>
                <div
                    className={`center-x flex-wrap ${classes.rightContent}`}
                >
                    <h2 className='center-text w-100'>
                        Leaderboard
                    </h2>
                    <FirstPlacePartners partners={firstPlaceDUMMY} />
                    <PartnersList partners={partnersDUMMY} />
                    {isLoadingGetLeaderBoard && <LoadingCenter />}

                </div>

            </Card>
        </div>
    )
}

export default ProgressUi