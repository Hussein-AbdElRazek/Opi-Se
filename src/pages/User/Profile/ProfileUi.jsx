import { Box, Button, Grid, IconButton } from '@mui/material'
import { Card, ProfilePic } from '../../../components/ui'
import classes from './Profile.module.css'
import editIcon from '../../../assets/icons/edit.svg'
import plusIcon from '../../../assets/icons/plus.svg'
import { Btn } from '../../../components/inputs'
import copyIcon from '../../../assets/icons/copy.svg'
import { Link } from 'react-router-dom'
const ProfileUi = (props) =>
{
    const {
        userData,
    } = props;
    return (
        <div>
            <div>
                <div
                    className={classes.cover}
                >
                    <IconButton
                        className={classes.editIcon}
                    >
                        <img src={editIcon} alt="edit" />
                    </IconButton>
                    <div
                        className={classes.pic}
                    >
                        <ProfilePic />
                        <IconButton
                            className={classes.plusIcon}
                        >
                            <img src={plusIcon} alt="add" />
                        </IconButton>
                    </div>
                    <div
                        className={classes.editBtn}
                    >
                        <Link
                            to="/profile/edit"
                        >
                            <Btn>
                                Edit Profile
                            </Btn>
                        </Link>

                    </div>
                </div>
                <div
                    className={classes.content}
                >
                    <div
                        className={classes.userData}
                    >
                        <h4>
                            {userData.userName}
                        </h4>
                        <p>
                            Web Developer
                        </p>
                        <p>
                            {userData.age} Years
                        </p>
                        <p>
                            {userData.location}
                        </p>
                    </div>
                    <Grid
                        container
                        className={classes.aboutSection}
                        rowSpacing={5}
                        columnSpacing={{
                            xs: 2,
                            sm: 2,
                            md: 2,
                            lg: 2,
                            xl: 2
                        }}
                        row
                    // sx={{
                    //     flexWrap:"wrap"
                    // }}
                    >
                        <Grid
                            item
                            md={6}
                            sm={12}
                        >
                            <Card>
                                <h6>
                                    About me
                                </h6>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dolores!
                                </p>
                            </Card>
                        </Grid>
                        <Grid
                            md={6}
                            sm={12} item
                        >
                            <Card>
                                <h6>
                                    Skills
                                </h6>
                                <div
                                    className={classes.skills}
                                >
                                    <Button>
                                        UI/UX
                                    </Button>
                                    <Button>
                                        Figma                                </Button>
                                    <Button>
                                        UX Design                                </Button>
                                </div>
                            </Card>
                        </Grid>
                        <Grid
                            md={6} item
                            sm={12}
                            sx={{
                                // height: "70px",
                                marginBottom: "20px"

                            }}
                        >
                            <Card>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        flexWrap: "nowrap",
                                        height: "50px"
                                        // backgroundColor: "blue"
                                    }}
                                >
                                    <span>
                                        Id:https/Opi-se/{userData.userName}
                                    </span>
                                    <IconButton
                                        sx={{


                                            "& img": {
                                                width: "25px"

                                            }
                                        }}
                                    >
                                        <img src={copyIcon} alt="copy icon" />
                                    </IconButton>
                                </Box>

                            </Card>
                        </Grid>


                    </Grid>
                </div>
            </div>
        </div >
    )
}

export default ProfileUi