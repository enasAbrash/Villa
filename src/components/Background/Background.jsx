import VideoContent from "../VideoContent/VideoContent"
import videoFrame from "../../assets/images/video-frame.jpg"
import './BackgroundStyle.css'


const Background = ({im,title,text,content}) => {
  return (
    <div className="background">
     <img src={im} />
     <div className="background-info">
     <h6>{title}</h6>
     <h2>{text}</h2>
     {/* <VideoContent img={videoFrame}/> */}
     <div className="bg-content">{content}</div>
     
</div>

    </div>
  )
}

export default Background