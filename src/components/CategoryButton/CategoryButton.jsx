import { NavLink } from 'react-router-dom'
import './CategoryButtonStyle.css'

const CategoryButton = ({title}) => {
  return (
   <ul className='category-button'>
    
      {
        title.map((element,index)=>{return(
          <li key={index}>
          <NavLink  to ="#" className={({isActive})=>isActive ?"active": ""}>{element}</NavLink>
</li>
        )


        })
      }
    
   </ul>
    
  )
}

export default CategoryButton