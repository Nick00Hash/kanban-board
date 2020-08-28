import React from 'react'
import { Grid } from "@material-ui/core"

import CardTile from './CardTile'

const Column = (props) => {
  const mappedCards = props.column.cards.map(card=> {
    return (
      <CardTile key={card.title} card={card} />
    )
  })
  return (
    <div>
      {mappedCards}
    </div>
  )
}

export default Column
