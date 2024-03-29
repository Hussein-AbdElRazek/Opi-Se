import PartnersListItem from './PartnersListItem'
import classes from '../styles/PartnersList.module.css'

const PartnersList = ({ partners }) =>
{
    return (
        <div
            className='w-100'
        >
            {partners.map((partnerShip, index) => (
                <div
                    key={index}
                    className={partnerShip[1].isMyPartnerShip ? classes.myData : ""}
                >
                    <PartnersListItem  {...partnerShip[0]} />
                    <PartnersListItem {...partnerShip[1]} />
                </div>
            ))}
        </div>
    )
}

export default PartnersList