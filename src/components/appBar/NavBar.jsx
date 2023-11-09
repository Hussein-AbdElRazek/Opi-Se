import { IconBtn } from './IconBtn'
import classes from './styles/Navbar.module.css'
import { SearchBar } from './SearchBar'
import notificationIcon from '../../assets/icons/notification.svg'
import addFriendIcon from '../../assets/icons/addFriend.svg'
import { ProfileIcon } from './ProfileIcon'
export const NavBar = ({ title }) =>
{
    return (
        <div
            className={classes.container}
        >
            <div
                className="center-y"
            >
                <h2
                    className={classes.title}
                >
                    {title}
                </h2>
                <SearchBar />
            </div> 
            <div
            className={classes.iconsGroup}
            >
                <IconBtn 
                    img={notificationIcon}
                />
                <IconBtn 
                    img={addFriendIcon}
                />
                <ProfileIcon/>
            </div>
        </div>
    )
}
