import InfoTable from '../InfoTable/InfoTable'
import Accordion from '../Accordion/Accordion'

import './FeaturedSectionStyle.css'
import {infoTable1} from '../../InfoTable';


const FeaturedSection = ({img}) => {
  return (
   <div className="featured-section">
    <div className="featured-container">

    <div className="featured-row">
     <div className="featured-col-4">
        <img src={img}/>
     </div>
     <div className="featured-col-5">
     <div className="featured-section-heading">
            <h6>| Featured</h6>
            <h2>Best Appartment &amp; Sea view</h2>
          </div>
          <Accordion className ='featured-accordion' accordion={[{title:"Best useful links ?",
  content:"Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it."},
  {title:"How does this work ?",content:"Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {title:"Why is Villa Agency the best ?", content:"Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} ]} />  
     </div>
     <div className="featured-col-3">
     <InfoTable img={true} content={infoTable1} />
 
     </div>

</div>

    </div>


   </div>
  )
}

export default FeaturedSection