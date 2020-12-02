import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = styled(motion.div)`
  width: 100vw;
  max-width: 325px;
  position: fixed;
  height: 100vh;
  background: #c13934;
  z-index: 50;
  top: 0;
  padding: 50px 20px 0;
  color: #fff;
`

const CloseButton = styled.button`
  background: #fff;
  color: #c13934;
  border-radius: 50%;
  border: none;
  font-size: 26px;
  padding: 0;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 10px;
  left: 10px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledCloseButtonIcon = styled(FontAwesomeIcon)`
  color: #c13934;
  margin: 0;
  padding: 0;
`

const sidebarAnimation = {
  closed: {
    x: '100vw',
    // transition: {
    //   duration: 0.25,
    // },
  },
  open: {
    x: 'calc(100vw - 325px)',
    // transition: {
    //   duration: 0.5,
    // },
  },
}

const Cart = ({ isOpen, setIsVisible, cartList }) => {
  return (
    <Sidebar
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      variants={sidebarAnimation}
      setIsVisible={setIsVisible}
      list={cartList}
    >
      <CloseButton onClick={() => setIsVisible(false)}>
        <StyledCloseButtonIcon icon={faTimes} />
      </CloseButton>
      <h1>Hello</h1>
      <ul>
        {cartList.map(item => (
          <li key={item.id} className={item.title}>
            {item.title}...{item.cost}
          </li>
        ))}
      </ul>
    </Sidebar>
  )
}

export default Cart
