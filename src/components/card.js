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
  h3 {
    margin: 0;
  }
  .title {
    color: #c13934;
    background: #cdcdcd;
    padding: 0 20px;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
  transition: background-color 0.25s ease-in-out;
  cursor: pointer;
  &.removeButton {
    background-color: #af9b4e;
  }
`

const Card = ({ id, title, cost, category, desc, addItem, removeItem }) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <StyledCard key={id} variants={card} initial="hidden" id={id}>
      <div className="title">
        <h3>{title}</h3>
      </div>

      <div className="cost">
        <p>${cost}</p>
        <CartButton
          onClick={
            !isClicked
              ? () => {
                  addItem(id, title, cost, desc, category)
                  setIsClicked(true)
                }
              : () => {
                  removeItem(id, title, cost, desc, category)
                  setIsClicked(false)
                }
          }
          // disabled={isClicked}
          className={isClicked ? `removeButton` : `addButton`}
        >
          {isClicked ? `Remove from Cart` : `Add to Cart`}
        </CartButton>
      </div>
    </StyledCard>
  )
}

export default Card
