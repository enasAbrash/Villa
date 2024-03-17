import RoundButton from '../RoundButton/RoundButton';
import './CardStyle.css';

const Card = ({content}) => {
  return (
    <div className="row">

  {
    content.map((element,index)=>{return(
    <div className="item" key={index}>
<img src={element.img}/>
<span className='category' >{element.category}</span>
<h6>{element.price}</h6>
<h4>{element.address}</h4>
<ul>
  <li>Bedrooms: <span>{element.bedrooms}</span></li>
  <li>Bathrooms: <span>{element.bathrooms}</span></li>
  <li>Area: <span>{element.area}</span></li>
  <li>Floor: <span>{element.floor}</span></li>
  <li>Parking: <span>{element.parking}</span></li>
</ul>

<RoundButton icon={false} btn="Schedule a visit"/>


    </div>)}
    )}
    






    </div>
  )
}

export default Card