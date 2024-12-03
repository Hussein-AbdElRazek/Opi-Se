import { GuestCard, HeaderTextHero, Paragraph, PicAndText } from '../../../components/ui'
import contactClasses from '../ContactUs/ContactUs.module.css'
import HeroCard from './HeroCard'
import classes from './Landing.module.css'
import partnerImg from '../../../assets/images/partner.svg'
import mentorImg from '../../../assets/images/mentor.svg'
import parentsImg from '../../../assets/images/parents.svg'
import appropriatePartner from '../../../assets/images/appropriatePartner.png'
import mentalHealthSupport from '../../../assets/images/mentalHealthSupport.png'
import appropriateMentor from '../../../assets/images/appropriateMentor.png'
import UsersCounters from '../UsersCounters/UsersCounters'
import { Btn } from '../../../components/inputs'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Landing = () =>
{
    const location = useLocation();
    // scroll to sign up section if navigation to it

    useEffect(() =>
    {
        if (location.hash)
        {
            const element = document.getElementById(location.hash.substring(1));
            if (element)
            {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div id='signup'>
            <div className={`${contactClasses.container} ${classes.hero}`} >
                <HeaderTextHero >
                    You deserve to study better
                </HeaderTextHero>
                <HeaderTextHero type='h2'>
                    What type of Opi Se are you looking for?
                </HeaderTextHero>
                <br />
                <br />

                <div className="center-x flex-wrap">
                    <HeroCard
                        title='Partner'
                        img={partnerImg}
                        to={'/user/signup'}
                    />
                    <HeroCard
                        title='Mentor'
                        subTitle='Coming Soon'
                        img={mentorImg}
                        // to={'/mentor/signup'}
                        disabled={true}
                    />
                    <HeroCard
                        title='Parents'
                        subTitle='Coming Soon'
                        img={parentsImg}
                        disabled={true}
                    />
                </div>
                <br />
                <br />
            </div>

            <GuestCard>
                <br />
                <br />
                <br />
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

                <div className='br' />
                <br />
                <br />
                <br />
                <br />
            </GuestCard>

            <UsersCounters />

            <div className={`${classes.signupSection} center-y center-x`}>
                <div className={`center-x flex-wrap ${classes.content}`} >
                    <HeaderTextHero>
                        Ready to get your perfect study partner ?
                    </HeaderTextHero>
                    <Paragraph>
                        Are you ready to boost your productivity and enhance your learning experience? Join us today and discover the perfect study partner designed to meet your needs. Whether you're preparing for exams, tackling new subjects, or improving your skills, our platform offers the tools and resources to help you succeed. Don't wait—start learning smarter and more efficiently now!
                    </Paragraph>
                    <div className={`${classes.action} center-x`}>
                        <Btn to='/#signup'>Sign Up Now</Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing