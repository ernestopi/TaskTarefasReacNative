import React from "react"
import { Scrollview } from "react-native"
import { DrawerItems } from "react-navigation-drawer"

export default props => {
    return (
        <Scrollview>
            <DrawerItems {...props} />
        </Scrollview>
    )
}

