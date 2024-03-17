import React from 'react'
import Card from '../Card/Card'
import {properties} from './../../properties';
import './ContainerStyle.css'
const Container = () => {
  return (
    <div className="container-card">
    <Card content={properties} />
    </div>
  )
}

export default Container