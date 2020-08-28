import React, { Component } from 'react'
import ContainerOfColumns from './ContainerOfColumns'
import CardTile from './CardTile'

const index = () => {
  return (
    <div>
      <ContainerOfColumns>
        <CardTile/>
      </ContainerOfColumns>
    </div>
  )
}

export default index