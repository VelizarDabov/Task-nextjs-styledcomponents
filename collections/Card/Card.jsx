// The Card to be exported goes here
import React from 'react'
import { StyledContainerCard, StyledTitle } from './elements'

const Card = ({ title, ...props}) => {
  return (
    <StyledContainerCard {...props}>
<StyledTitle>{title}</StyledTitle>
    </StyledContainerCard>
  )
}

export default Card