
import './AccordionStyle.css'
import '../../acc1.js'

const Accordion = ({accordion}) => { 
  return (
   <>
        {
       accordion.map((element,index)=>{return( 
            < div key={index}>
             <button className="accordion" >{element.title}</button>
              <div className="panel">
        <p>{element.content}</p>
              </div>
</div>
)})
}

</>   

  )
}

export default Accordion