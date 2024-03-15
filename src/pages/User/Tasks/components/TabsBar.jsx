import { Tabs } from '../../../../components/common'
import classes from './styles/TabsBar.module.css'
const TabsBar = () =>
{
    const tabs = [
        {
            value: 0,
            label: "Tasks",
            to: "",
        },
        {
            value: 1,
            label: "Calender",
            to: "calender"
        },
    ]

    const tabsMap = {
        "/tasks": 0,
        "/tasks/calender": 1,
    }

    return (
        <Tabs
            tabs={tabs}
            tabsMap={tabsMap}
            tabsClassName={classes.tabs}
        />
    )
}

export default TabsBar