import { FaCalendar } from "react-icons/fa"
import './RoundButtonStyle.css'

const RoundButton = ({icon,btn}) => {
  return (
<>
    <i className={(icon)?"round-button-icon":"visible"}> <FaCalendar  /></i> 
    
    <button className={(icon)?"nav-button":"round-button"}>{btn}</button>
    </>
  )
}

export default RoundButton