import React from 'react'
import SlideShow from '../../components/SlideShow/SlideShow'
import img1 from '../../assets/images/banner-01.jpg'
import img2 from '../../assets/images/banner-02.jpg'
import img3 from '../../assets/images/banner-03.jpg'
import Background from '../../components/Background/Background'
import VideoContent from '../../components/VideoContent/VideoContent'
import videoBg from '../../assets/images/video-bg.jpg';
import contactBg from '../../assets/images/contact-bg.jpg';
import videoFrame from "../../assets/images/video-frame.jpg"
import Container from '../../components/Container/Container'
import ContactForm from '../../components/ContactForm/ContactForm'
import MiniCard from '../../components/MiniCard/MiniCard'
import email from '../../assets/images/email-icon.png'
import phone from '../../assets/images/phone-icon.png'
import './HomeStyle.css'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection'
import featuredImage from '../../assets/images/featured.jpg'
import BestDealSection from '../../components/BestDealSection/BestDealSection'
import DealImage from '../../assets/images/deal-01.jpg'


const Home = () => {
  return (
    <>
  <SlideShow  data={[
    {
      "src": img1,
      "alt": "Hurry Get the Best Villa for you"
    },
    {
      "src": img2,
      "alt": " Be Quick Get the best villa in town"
    },
    {
      "src": img3,
      "alt": "Act Now Get the highest level penthouse"
    }
  ]}/>
  
  
  <FeaturedSection img={featuredImage}/>
  <div className="home-heading">
  <h6 className='home-h6'>| PROPERTIES</h6>
  <h2 className='home-h2'>We Provide The Best Property You Like</h2>
  </div>
   <Container />
<Background im={videoBg} title="| VIDEO VIEW" content={<VideoContent img={videoFrame}/>}/>

<BestDealSection img={DealImage}/>
<Background im={contactBg} title="| CONTACT US" content={<ContactForm/>}/>

<div className='home-minicard'><MiniCard im={phone} detail1="010-020-0340" detail2="Phone Number"/></div>
<div className='home-minicard'><MiniCard im={email} detail1="info@villa.co" detail2="Business Email"/></div>
</>

  )
}
export default Home