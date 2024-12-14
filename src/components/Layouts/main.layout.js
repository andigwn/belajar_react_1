import React from 'react'
import NavigationLayout from "./navigation.layout";
import SidebarLayout from './sidebar.layout';
const MainLayout = ({ children }) => {
    return (
        <React.Fragment>
            <SidebarLayout />
            <NavigationLayout />
            {children}
        </React.Fragment>
    )
}

export default MainLayout;