import './MiniCardStyle.css';

const MiniCard = ({im,detail1,detail2}) => {
  return (
    <div className='mini-card'>
<img src={im}/>
<h6>{detail1}<br/>
<span>{detail2}</span>
</h6>
    </div>
  )
}

export default MiniCard