import React from 'react'
import { Grid, SvgIcon, Tab, Tabs, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './styles/SideBar.module.css'
export const SideBar = () =>
{
    //handle if page opened not from tabs active page 
    let url = window.location.pathname;
    const tabsUrl = {
        "/profile/edit": 0,
        "/profile/change-password": 1,
    };
    const [value, setValue] = React.useState(tabsUrl[url] || 0);

    const handleChange = (event, newValue) =>
    {
        setValue(newValue);
    };
    return (
        <Grid
            item
            md={3.5}
            sm={1.5}
            xs={2}
            className={classes.container}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="navigation tabs"
                sx={{
                    "& a": {
                        textTransform: "none",
                        minHeight: 0,
                        fontSize: "16px"
                    },
                    "& .active path": {
                        fill: "var(--secondary) !important",
                    },
                    "& .active": {
                        color: "var(--secondary) !important",
                    },
                    width: "90%",
                    backgroundColor: "var(--primary)",
                    padding: "20px 0",
                    borderRadius: "  var(--border-radius-150)",
                }}
                TabIndicatorProps={{
                    style: {
                        width: '5px',
                        borderRadius: "0px 15px 15px 0px",
                        backgroundColor: "var(--secondary)",
                        left: 0,
                    }
                }}
                className={classes.tabs}
            >
                <Tab
                    sx={{ justifyContent: "left" }}
                    iconPosition="start"
                    icon={
                        <div
                            style={{
                                minWidth: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Tooltip title="Public Profile">
                                <SvgIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.0001 3.33325C11.95 3.33325 8.66683 6.61651 8.66683 10.6666C8.66683 13.1859 9.93718 15.4085 11.8722 16.7287C7.38617 18.372 4.15473 22.6172 4.00533 27.6368C3.9889 28.1889 4.4231 28.6497 4.97514 28.6661C5.52718 28.6826 5.98802 28.2484 6.00445 27.6963C6.16463 22.3142 10.5786 17.9999 15.9999 17.9999C21.4212 17.9999 25.8352 22.3142 25.9954 27.6963C26.0119 28.2484 26.4727 28.6826 27.0247 28.6661C27.5768 28.6497 28.011 28.1889 27.9945 27.6368C27.8451 22.6172 24.6138 18.3721 20.1278 16.7287C22.0629 15.4085 23.3333 13.1859 23.3333 10.6666C23.3333 6.61651 20.0501 3.33325 16.0001 3.33325ZM10.6668 10.6666C10.6668 7.72105 13.0546 5.33325 16.0001 5.33325C18.9455 5.33325 21.3333 7.72105 21.3333 10.6666C21.3333 13.6121 18.9455 15.9999 16.0001 15.9999C13.0546 15.9999 10.6668 13.6121 10.6668 10.6666Z" fill="#1F2328" />
                                    </svg>
                                </SvgIcon>
                            </Tooltip>
                        </div>}
                    label="Public Profile"
                    to="/profile/edit"
                    component={NavLink} />
                <Tab
                    sx={{ justifyContent: "left" }}
                    iconPosition="start"
                    icon={
                        <div
                            style={{
                                minWidth: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Tooltip title="Password">
                                <SvgIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M16.25 14.664C16.9973 14.2317 17.5 13.4238 17.5 12.4984C17.5 11.1177 16.3807 9.99841 15 9.99841C13.6193 9.99841 12.5 11.1177 12.5 12.4984C12.5 13.4238 13.0027 14.2317 13.75 14.664V18.1234C13.75 18.8138 14.3096 19.3734 15 19.3734C15.6904 19.3734 16.25 18.8138 16.25 18.1234L16.25 14.664Z" fill="#1F2328" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.3251 0.7942C14.7638 0.651933 15.2362 0.651933 15.6749 0.7942L25.9874 4.13879C26.8885 4.43104 27.5 5.26976 27.5 6.21868V12.4984C27.5 20.2351 22.7865 25.8795 15.7488 28.5351C15.2667 28.717 14.7333 28.717 14.2512 28.5351C7.21349 25.8795 2.50001 20.2351 2.5 12.4984V6.21833C2.5 5.26909 3.11184 4.43095 4.01265 4.1388L14.3251 0.7942ZM15.0964 2.57774C15.0337 2.55742 14.9663 2.55742 14.9036 2.57774L4.59109 5.92234C4.46119 5.96447 4.375 6.084 4.375 6.21833L4.375 12.4984C4.37501 19.3251 8.47594 24.3518 14.9132 26.7808C14.9686 26.8017 15.0314 26.8017 15.0868 26.7808C21.5241 24.3518 25.625 19.3251 25.625 12.4984V6.21868C25.625 6.08404 25.5385 5.96437 25.4089 5.92234L15.0964 2.57774Z" fill="#1F2328" />
                                    </svg>
                                </SvgIcon>
                            </Tooltip>
                        </div>}
                    label="Password"
                    to="/profile/change-password"
                    component={NavLink} />
            </Tabs>
        </Grid>
    )
}
