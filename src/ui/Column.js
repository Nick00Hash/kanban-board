import React from 'react'
import { Grid } from "@material-ui/core"


const Column = () => {
  cards = []
  const mappedCards = cards.map(card=> {
    <CardTile props={props} />
  })
  return (
    {mappedCards}
  )
}

export default Column
