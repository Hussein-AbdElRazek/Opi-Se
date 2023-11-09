import React from 'react'
import { NavBar } from './NavBar'
import { TabsBar } from './TabsBar'

export const AppBar = ({ title }) =>
{
    return (
        <div>
            <NavBar title={title} />
            <TabsBar />
        </div>
    )
}
