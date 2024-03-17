import React from 'react'
import Container from '../../components/Container/Container'
import Hero from '../../components/Hero/Hero'
import CategoryButton from '../../components/CategoryButton/CategoryButton'
import SlideShow from '../../components/SlideShow/SlideShow'
import Pagination from '../../components/Pagination/Pagination'
import RoundButton from '../../components/RoundButton/RoundButton'


const Properties = () => {
  
  return (
    
    <>

    <Hero btn="HOME / PROPERTIES"  tittle="PROPERTIES"/>
    <CategoryButton title={["Show All","Apartment","Villa House","Penthouse"]}/>
  <Container/>
    <Pagination/>
 
    </>
  )
}

export default Properties