import './BestDealSectionStyle.css'
import {infoTable2} from '../../InfoTable';
import CategoryButton from '../CategoryButton/CategoryButton';
import InfoTable from '../InfoTable/InfoTable';
import RoundButton from '../RoundButton/RoundButton';
const BestDealSection = ({img}) => {
  return (
    <div className="best-deal-container">

     <div className="best-deal-row">
    <div className="best-col-4">
        <div className="best-heading">
            <h6>| Best Deal</h6>
            <h2>Find Your Best Deal Right Now!</h2>
          </div></div>
    <div className="best-col-8">
    <CategoryButton className='best-button' title={["Apartment","Villa House","Penthouse"]}/>

    </div>
</div>
<div className="best-deal-row">
<div className="best-col-12">
<div className="best-col-3">
<InfoTable  img={false} content={infoTable2} />
</div>
<div className="best-col-6">
    <img src={img}/>
</div>
<div className="best-col-5">

<h4>Extra Info About Property</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. 
 <br/><br/>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
 {/* <RoundButton icon={true} btn="Schedule a visit"/> */}
</div>

</div>
</div>
    </div>
  )
}

export default BestDealSection