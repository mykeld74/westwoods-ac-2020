import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Sidebar = styled(motion.div)`
  width: 100vw;
  max-width: 325px;
  position: absolute;
  height: 100vh;
  background: #0f0;
  z-index: 50;
  top: 0;
  /* right: 0px; */
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

const Cart = ({ isOpen }) => {
  return (
    <Sidebar
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      variants={sidebarAnimation}
    >
      <h1>Hello</h1>
    </Sidebar>
  )
}

export default Cart
