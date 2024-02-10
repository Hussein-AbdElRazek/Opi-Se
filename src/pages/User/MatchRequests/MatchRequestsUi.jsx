import { List } from "@mui/material"
import { LoadingCenter, PopUpCard } from "../../../components/ui"
import { NotificationAndRequestItem } from "../../../components/common/NotificationAndRequestItem"
import MatchActions from "./MatchActions"

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
            {(!requests.length && !isLoadingGetRequests) && (<p
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                No requests yet!
            </p>
            )}
            {isLoadingGetRequests && <LoadingCenter />}
        </PopUpCard>
    )
}

export default MatchRequestsUi