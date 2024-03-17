import React from 'react'
import Hero from '../../components/Hero/Hero'
import DealImage from '../../assets/images/deal-01.jpg'
import './PropertyDetailsStyle.css'
import Details from '../../components/Details/Details'
import BestDealSection from '../../components/BestDealSection/BestDealSection'

const PropertyDetails = () => {
  return (
    <>
    <Hero btn="HOME / SINGLE PROPERTY"  tittle="SINGLE PROPERTY"/>
     <Details />
  <BestDealSection img={DealImage}/>
    </>
  )
}

export default PropertyDetails