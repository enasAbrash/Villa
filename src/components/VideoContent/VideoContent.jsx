import { FaPlay } from "react-icons/fa";
import './VideoContentStyle.css'
const VideoContent = ({img}) => {
  return (
    <div className="video-content">
    <div className="video-container">
    <div className="video-frame">
<img src={img}  />
  <a href="https://youtube.com" target="_blank">
  <FaPlay />

  </a>
    </div>
    </div>
    </div>
  )
}

export default VideoContent