import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const card = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const StyledCard = styled(motion.div)`
  width: 100%;
  background: #dedede;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  align-content: space-between;
  p,
  h1 {
    margin: 0;
  }
  .title {
    color: #c13934;
    background: #cdcdcd;
    padding: 20px;
    height: 84px;
  }
  .desc {
    padding: 5px 20px;
  }
  .cost {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 60px;
  }
`
const CartButton = styled.button`
  width: 50%;
  height: 40px;
  background-color: #c13934;
  color: #fff;
  border: none;
  outline: none;
`

const Card = ({ id, title, description, cost }) => {
  return (
    <StyledCard key={id} variants={card} initial="hidden">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="desc">
        <p>{description}</p>
      </div>
      <div className="cost">
        <p>${cost}</p>
        <CartButton>Add to Cart</CartButton>
      </div>
    </StyledCard>
  )
}

export default Card
