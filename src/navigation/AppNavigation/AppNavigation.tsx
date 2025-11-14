//https://ionic.io/ionicons/v4
import {
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon
} from "@ionic/react"
import {IonReactRouter} from "@ionic/react-router"
import {Route,Redirect} from "react-router-dom"
import {settingsOutline,listOutline} from "ionicons/icons"
import {Tasks,Settings} from "../../screens"

import "./AppNavigation.scss"

export function AppNavigation() {
  return (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/tasks" component={Tasks} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/">
                    <Redirect to={"/tasks"} />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom" className="tab-bar">
                <IonTabButton tab="tasks" href="/tasks" className="ion-tab-button">
                    <IonIcon icon={listOutline} />
                </IonTabButton>
                <IonTabButton tab="settins" href="/settings">
                    <IonIcon icon={settingsOutline} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  )
}
