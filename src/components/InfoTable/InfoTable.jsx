import './InfoTableStyle.css'

const InfoTable = ({img,content}) => {
  return (
    <div className="col-lg-3">
   <div className="info-table">
<ul>

{
content.map((element,index)=>{return(
    <li key={index}>
       
   {(img)?<><img src={element.img} /><h4>{element.title}</h4>
<span>{element.content}</span></>:<>{element.title}<span>{element.content}</span></>}
</li>
)}
)
}


</ul>
   </div>

   </div>
  )
}

export default InfoTable