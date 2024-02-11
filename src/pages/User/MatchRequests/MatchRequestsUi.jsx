import { List } from "@mui/material"

import { LoadingCenter, PopUpCard } from "../../../components/ui"
import { NotificationAndRequestItem } from "../../../components/common/NotificationAndRequestItem"
import MatchActions from "./MatchActions"
import VectorAndText from "../../../components/common/VectorAndText"
import noRequestsImg from '../../../assets/images/noRequests.png'

const MatchRequestsUi = ({ requests, isLoadingGetRequests }) =>
{
    return (
        <PopUpCard
            title="Requests"
        >
            <List
                dense={true}
            >
                {requests.map(request =>
                {
                    request.message = "send you add request"
                    return (
                        < NotificationAndRequestItem
                            itemData={request}
                            action={< MatchActions requestData={request} smallBtn={true} />}
                            key={request._id}
                        />
                    )
                })}
            </List>
            {(!requests.length && !isLoadingGetRequests) && (
                <VectorAndText
                    img={noRequestsImg}
                    h="No Requests yet"
                    p={
                        <>
                            You have no Requests right now.
                            <br />
                            come back later
                        </>
                    }
                />
            )}
            {isLoadingGetRequests && <LoadingCenter />}
        </PopUpCard>
    )
}

export default MatchRequestsUi