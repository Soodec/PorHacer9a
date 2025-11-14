import {IonIcon} from "@ionic/react"
import {chevronForwardCircleOutline} from 'ionicons/icons'
import './Options.scss'
import {OptionTypes} from "./Options.type"


export function Options(props:OptionTypes.Props) {
  const {title, icon, onClick} = props
  return (
    <div className="options" onClick={onClick}>
      <div>
        <IonIcon icon={icon} />
        <span>{title}</span>
      </div>
      <IonIcon icon={chevronForwardCircleOutline}/>
    </div>
  )
}
