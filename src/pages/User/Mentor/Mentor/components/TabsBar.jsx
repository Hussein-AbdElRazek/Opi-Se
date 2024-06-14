import { Tabs } from '../../../../../components/common'
import taskTabsBarClasses from '../../../Tasks/components/styles/TabsBar.module.css'
import classes from './styles/TabsBar.module.css'

const TabsBar = ({ name }) =>
{
    const tabs = [
        {
            value: 0,
            label: "Quizzes",
            to: "quizzes",
        },
        {
            value: 1,
            label: "Assignments",
            to: "assignments"
        },
    ]

    const tabsMap = {
        "/quizzes": 0,
        "/assignments": 1,
    }

    return (
        <div>
            <Tabs
                tabs={tabs}
                tabsMap={tabsMap}
                tabsClassName={taskTabsBarClasses.tabs}
                componentBeforeTabs={
                    <div className='center-y' title={name}>
                        <h1 className={classes.name}>{name}:</h1>
                    </div>
                }
            />
            <div className='br'></div>
        </div>

    )
}

export default TabsBar