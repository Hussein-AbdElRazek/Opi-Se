import { useState } from 'react'
import { Tab, Tabs } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './styles/ChatProfileTabs.module.css'
const ChatProfileTabs = () =>
{

    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) =>
    {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            TabIndicatorProps={{
                style: {
                    background: "var(--secondary)",
                    borderRadius: "5px",
                    bottom: "18px",
                    height: "3px",
                }
            }}
            sx={{
                '& .Mui-selected': {
                    color: 'var(--secondary) !important',
                },
            }}
        >
            <Tab
                value={0}
                label={"Media"}
                key="media"
                component={NavLink}
                // to={`/`}
                disabled
            />
        </Tabs>
    )
}

export default ChatProfileTabs