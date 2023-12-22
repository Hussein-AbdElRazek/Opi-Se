import { List } from "@mui/material"
import { PopUpCard } from "../../../components/ui"
import { NotificationAndRequestItem } from "../../../components/common/NotificationAndRequestItem"
import MatchActions from "./MatchActions"

const MatchRequestsUi = () =>
{
    const requestsList = [
        {
            _id: 1,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
        {
            _id: 2,
            message: "send you add request",
            userName: "Khadija Ahmed",
            profileImage: ""
        },
    ]
    return (
        <PopUpCard
            title="Requests"
        >
            <List
                dense={true}
            >
                {requestsList.map(request => (
                    <NotificationAndRequestItem
                        itemData={request}
                        action={<MatchActions />}
                        key={request._id}
                    />
                ))}
            </List>
        </PopUpCard>
    )
}

export default MatchRequestsUi