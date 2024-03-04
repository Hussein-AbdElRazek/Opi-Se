import VectorAndText from '../../../components/common/VectorAndText'
import noPartnerImg from '../../../assets/images/noPartner.png'

const NoPartnerYet = () =>
{
    return (
        <VectorAndText
            img={noPartnerImg}
            h="You don't have a partner yet"
            p={
                <>
                    To access this page, you will need a study partner
                    <br />
                    Click on "Get Recommendation" to find a suitable partner for you
                </>
            }
        />
    )
}
export default NoPartnerYet