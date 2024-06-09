import contactClasses from '../ContactUs/ContactUs.module.css'
import classes from './AboutUs.module.css'
import { CurveContainer, GuestCard, HeaderTextHero, Paragraph } from '../../../components/ui'
import UsersCounters from '../UsersCounters/UsersCounters'
import Member from './Member'
import husseinImg from '../../../assets/images/hussein.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AboutUs = () =>
{
    return (
        <div>
            <div className={contactClasses.container}>
                <HeaderTextHero >
                    About Us
                </HeaderTextHero>
            </div>

            <CurveContainer color='secondary'>
                <GuestCard color='secondary'>
                    <div className={classes.text}>
                        <HeaderTextHero type='h2'>
                            Find your perfect study partner
                        </HeaderTextHero>
                        <Paragraph>
                            Opi Se is a website that helps students find a suitable study partner with whom they
                            can interact, share notes and tasks,  and study together using our powerful
                            recommendation system that matches people based on their skills, interests,
                            gender and location.
                            We produce interactive learning
                            methods such as video calls, chat and chat sessions that have timers to
                            provide a new experience for partners with more peer interaction.
                        </Paragraph>
                    </div>
                </GuestCard>
            </CurveContainer>

            <UsersCounters />

            <GuestCard>
                <div className={classes.teamContainer}>
                    <HeaderTextHero >
                        Our Team
                    </HeaderTextHero>
                    <br />
                    <br />

                    <div className={`${classes.bigTeam} center-x center-y flex-wrap`}>
                        <Member
                            img={husseinImg}
                            name="HUSSEIN ABD EL RAZEK"
                            position='Front-End'
                        />
                        <Member
                            img={husseinImg}
                            name="HUSSEIN ABD EL RAZEK"
                            position='Front-End'
                        />
                        <Member
                            img={husseinImg}
                            name="HUSSEIN ABD EL RAZEK"
                            position='Front-End'
                        />
                        <Member
                            img={husseinImg}
                            name="HUSSEIN ABD EL RAZEK"
                            position='Front-End'
                        />
                        <Member
                            img={husseinImg}
                            name="HUSSEIN ABD EL RAZEK"
                            position='Front-End'
                        />
                        <Member
                            img={husseinImg}
                            name="HUSSEIN ABD EL RAZEK"
                            position='Front-End'
                        />
                    </div>
                    <div className={classes.smTeam}
                    >
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            loop={true}
                        >
                            <SwiperSlide>
                                <Member
                                    img={husseinImg}
                                    name="HUSSEIN ABD EL RAZEK"
                                    position='Front-End'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Member
                                    img={husseinImg}
                                    name="HUSSEIN ABD EL RAZEK"
                                    position='Front-End'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Member
                                    img={husseinImg}
                                    name="HUSSEIN ABD EL RAZEK"
                                    position='Front-End'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Member
                                    img={husseinImg}
                                    name="HUSSEIN ABD EL RAZEK"
                                    position='Front-End'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Member
                                    img={husseinImg}
                                    name="HUSSEIN ABD EL RAZEK"
                                    position='Front-End'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Member
                                    img={husseinImg}
                                    name="HUSSEIN ABD EL RAZEK"
                                    position='Front-End'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
                <br />
                <br />
                <br />
            </GuestCard>
        </div>
    )
}

export default AboutUs