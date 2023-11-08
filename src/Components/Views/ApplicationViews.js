import { UserViews } from "./UserViews"

export const ApplicationViews = () => {

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
       
        if (nutshellUserObject) {
            return <UserViews />
        }}