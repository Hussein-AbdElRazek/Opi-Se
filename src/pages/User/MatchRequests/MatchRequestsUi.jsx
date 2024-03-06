import { List } from "@mui/material"

import { LoadingCenter, PopUpCard } from "../../../components/ui"
import { NotificationAndRequestItem } from "../../../components/common/NotificationAndRequestItem"
import MatchActions from "./MatchActions"
import VectorAndText from "../../../components/common/VectorAndText"
import noRequestsImg from '../../../assets/images/noRequests.png'
import popUpCardClasses from '../../../components/ui/styles/PopUpCard.module.css'
import navbarPopMenuClasses from '../../../components/appBar/styles/PopMenu.module.css'
import { PopUpMenu as PopUpMenuComponent } from '../../../components/common'
import { ReactComponent as RequestsIcon } from '../../../assets/icons/addFriend.svg'
import classes from '../../../components/appBar/styles/IconBtn.module.css'

const MatchRequestsUi = ({ requests, isLoadingGetRequests, type = "navbar" }) =>
{
    return (
        <PopUpMenuComponent
            id="requests"
            openBtnType={"icon"}
            openBtnClassName={type === "navbar" ? classes.icon : navbarPopMenuClasses.popIconBtn}
            openBtnChild={
                <RequestsIcon
                    fill={type === "navbar" ?
                        "var(--secondary)" :
                        'var(--black-40)'
                    }
                />
            }
            containerClassName={popUpCardClasses.parent}
            placement="top"
            children={
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
            }
        />
    )
}

export default MatchRequestsUi