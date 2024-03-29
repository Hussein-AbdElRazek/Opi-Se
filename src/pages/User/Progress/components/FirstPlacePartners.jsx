import classes from '../styles/FirstPlacePartners.module.css'
import FirstPlacePartnerItem from './FirstPlacePartnerItem'
import { ReactComponent as CrownPic } from '../../../../assets/images/crown.svg'
const FirstPlacePartners = ({ partners }) =>
{
    return (
        <>
            {!!partners.length &&
                <div
                    className={`space-between ${classes.container}`}

                >
                    <FirstPlacePartnerItem {...partners[0]} />
                    <FirstPlacePartnerItem {...partners[1]} />
                    <CrownPic className={classes.crown} />
                </div>
            }
        </>
    )
}

export default FirstPlacePartners