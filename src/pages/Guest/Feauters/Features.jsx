import { CurveContainer, GuestCard, HeaderTextHero, PicAndText } from '../../../components/ui'
import classes from '../ContactUs/ContactUs.module.css'
import appropriatePartner from '../../../assets/images/appropriatePartner.png'
import mentalHealthSupport from '../../../assets/images/mentalHealthSupport.png'
import appropriateMentor from '../../../assets/images/appropriateMentor.png'
import studyCompetition from '../../../assets/images/studyCompetition.png'
const Features = () =>
{
    return (
        <div>
            <div className={classes.container}>
                <HeaderTextHero >
                    Our Features
                </HeaderTextHero>
            </div>

            <CurveContainer>
                <GuestCard>
                    <PicAndText
                        pic={appropriatePartner}
                        title='Appropriate Partner'
                        paragraph={`You can get the ideal partner who can share
                            ,create, and study with you using our robust 
                            recommendation system which matches the
                            people based on their skills, interests, 
                            gender, and location.
                            `}
                    />

                    <PicAndText
                        isTextFirst={true}
                        pic={mentalHealthSupport}
                        title='Mental-health Support'
                        paragraph={`We can help you to solve the problems you 
                                have to recreate a better image of yourself
                                to be focused, build, and reach a better 
                                limit of productivity on your studies with 
                                your partner.
                            `}
                    />

                    <PicAndText
                        pic={appropriateMentor}
                        title='Appropriate Mentor'
                        paragraph={`We believe in the importance of guidance 
                                and assistance in achieving personal and 
                                professional success and development, so 
                                we  can help you find the 
                                right mentor for you.
                            `}
                    />

                    <PicAndText
                        isTextFirst={true}
                        pic={studyCompetition}
                        title='Study Competition'
                        paragraph={`The fair competition in the study can improve effort and productivity so we created a dashboard that has all the partners in Opi Se with their points, the more you study with your partner the more you get points and get a better rank on the other partners. 
                            `}
                    />
                    <div className='br' />
                    <br />
                    <br />
                    <br />
                    <br />
                </GuestCard>
            </CurveContainer>
        </div>
    )
}

export default Features