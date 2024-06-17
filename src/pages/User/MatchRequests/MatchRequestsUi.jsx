import { List } from "@mui/material"

import { LoadingCenter, PopUpCard } from "../../../components/ui"
import { NotificationAndRequestItem } from "../../../components/common/NotificationAndRequestItem"
import MatchActions from "./MatchActions"
import VectorAndText from "../../../components/common/VectorAndText"
import noRequestsImg from '../../../assets/images/noRequests.png'
import popUpCardClasses from '../../../components/ui/styles/PopUpCard.module.css'
import { PopUpMenu as PopUpMenuComponent } from '../../../components/common'
import { ReactComponent as RequestsIcon } from '../../../assets/icons/addFriend.svg'
import classes from '../../../components/appBar/styles/IconBtn.module.css'

const MatchRequestsUi = ({ requests, isLoadingGetRequests, uiId, closeRequestsMenu }) =>
{
    return (
        <PopUpMenuComponent
            id={uiId}
            openBtnType={"icon"}
            openBtnClassName={classes.icon }
            openBtnChild={
                <RequestsIcon
                    fill={ "var(--secondary)" }
                />
            }
            containerClassName={popUpCardClasses.parent}
            placement="bottom"
            children={
                <PopUpCard
                    title="Requests"
                >
                    <List
                        dense={true}
                    >
                        {requests.map(request =>
                        {
                            return (
                                < NotificationAndRequestItem
                                    itemData={request}
                                    action={< MatchActions requestData={request} smallBtn={true} />}
                                    key={request._id}
                                    closeRequestsMenu={closeRequestsMenu}
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