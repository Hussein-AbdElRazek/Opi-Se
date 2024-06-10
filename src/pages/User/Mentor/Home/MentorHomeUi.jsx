import React from 'react'
import { HeaderText, Paragraph } from '../../../../components/ui'
import SearchBar from './components/SearchBar'
import classes from './MentorHome.module.css'
import MentorAvatar from './components/MentorAvatar'
import husseinTestImg from '../../../../assets/images/hussein.jpg'
const MentorHomeUi = () =>
{
    return (
        <div className={`${classes.container} center-x center-y flex-wrap`}>
            <HeaderText>
                Search for the Perfect Mentor
            </HeaderText>

            <SearchBar />

            <h2 className={classes.subheader}>
                Your Mentors
            </h2>
            
            <div className='center-x center-y flex-wrap w-100' >
                <MentorAvatar
                    name="Hussein Abd El Razek"
                    gender='male'
                />
                <MentorAvatar
                    name="Hussein Abd El Razek"
                    gender='male'
                    img={husseinTestImg}
                />
                <MentorAvatar
                    name="Nada"
                    gender='female'
                />
                <MentorAvatar
                    name="Hussein Abd El Razek"
                    gender='male'
                />
            </div>
            {/* <div className='center-x center-y flex-wrap w-100' >
                <Paragraph>
                    No mentors yet! Start Search by topic or tags to get your mentors
                </Paragraph>
            </div> */}
        </div>
    )
}

export default MentorHomeUi