import './DetailsStyle.css'
import InfoTable from '../../components/InfoTable/InfoTable'
import Accordion from '../../components/Accordion/Accordion'
import singlepropertyImage from '../../assets/images/single-property.jpg'
import {infoTable1} from '../../InfoTable';
const Details = () => {
  return (
    <div className="detail-container">
<div className="detail-row">
    <div className="detail-col-8">
        <div className="detail-main-image"> 
         <img src={singlepropertyImage}/>
         </div>
         <div className="detail-main-content">
        <span className='detail-category'>Apparment</span>
        <h4 className='detail-address'>24 New Street Miami, OR 24560</h4>
        <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
            
            <br/><br/>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie pop-up.</p>
            <Accordion accordion={[{title:"Best useful links ?",
  content:"Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it."},
  {title:"How does this work ?",content:"Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {title:"Why is Villa Agency the best ?", content:"Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} ]}  /> 
    </div>
    </div>
    
    <div className="detail-col-4">
    <InfoTable img={true} content={infoTable1} />
    </div>
</div>


    </div>
  )
}

export default Details