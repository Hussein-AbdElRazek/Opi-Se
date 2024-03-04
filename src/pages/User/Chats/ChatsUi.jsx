import ChatList from './ChatList';
import { PopChatCard } from '../../../components/ui';
import ChatsHeader from './ChatsHeader';
import VectorAndText from '../../../components/common/VectorAndText';
import noChatsImg from '../../../assets/images/noChats.png'
import classes from './Chats.module.css'
const ChatsUi = ({ partner }) =>
{
    return (
        <PopChatCard
            header={<ChatsHeader />}
        >
            {partner ?
                (
                    <ChatList
                        title="Your Partner"
                        chatList={[{
                            profileImage: partner.profileImage,
                            userName: partner.userName,
                            id: partner._id,
                        }]}
                    />
                ) : (
                    <div
                        className={classes.noChatsContainer}
                    >
                        <VectorAndText
                            img={noChatsImg}
                            h="No Chats yet"
                            p={
                                <>
                                    No messages in your box, yet! Start
                                    <br />
                                    looking for your partner.
                                </>
                            }
                        />
                    </div>
                )}
        </PopChatCard>
    )
}

export default ChatsUi