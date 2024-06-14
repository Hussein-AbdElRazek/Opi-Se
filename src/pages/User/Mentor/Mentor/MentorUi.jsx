import React from 'react'
import Assignment from './Assignments/components/Assignment'
import taskDummyPic from '../../../../assets/images/taskDummyPic.png'
import TabsBar from './components/TabsBar'
import { Outlet } from 'react-router-dom'
const MentorUi = (props) =>
{
    const { name } = props;
    return (
        <div>
            <TabsBar
                name={name}
            />
            <Outlet />
        </div>
    )
}

export default MentorUi