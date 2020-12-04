import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useToggleCart } from '../hooks/toggleCart'

const Sidebar = styled(motion.div)`
  width: 100vw;
  max-width: 325px;
  position: fixed;
  height: auto;
  min-height: 100vh;
  background: #c13934;
  z-index: 50;
  top: 0;
  padding: 50px 20px 0;
  color: #fff;
  p {
    &.instructions {
      width: calc(100% - 20px);
    }
  }
`

const CloseButton = styled.button`
  background: #c13934;
  color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  font-size: 26px;
  padding: 0;
  width: 90px;
  height: 36px;
  position: absolute;
  top: 10px;
  left: -90px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.33s ease-in-out;
  p {
    font-size: 13px;
    padding: 0;
    margin: 0 0 0 5px;
    line-height: 1.1;
    max-width: 50%;
  }
  &.close {
    left: 10px;
    width: 36px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`
const StyledCloseButtonIcon = styled(FontAwesomeIcon)`
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 20px;
`
const SuggestedTotal = styled.div`
  font-size: 20px;
  margin: 0 0 10px 0;
  position: absolute;
  bottom: 0;
  p {
    margin: 0 0 10px 0;
  }
`
const Total = styled.p`
  font-size: 26px;
  margin: 0;
  font-weight: 900;
`
const DonationBlock = styled.div`
  width: 100%;
  h4 {
    margin: 15px 0 0 0;
    text-decoration: underline;
  }
`
const DonationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-bottom: 0;
    &.bold {
      font-weight: 900;
    }
  }
`

const DonateLink = styled.a`
  width: calc(100% - 20px);
  height: 50px;
  background: #fff;
  color: #c13934;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid #c13934;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: #c13934;
    color: #fff;
    border: 2px solid #fff;
  }
`
const sidebarAnimation = {
  closed: {
    x: '100vw',
    transition: {
      duration: 0.33,
    },
  },
  open: {
    x: 'calc(100vw - 325px)',
    transition: {
      duration: 0.33,
    },
  },
}

const Cart = ({ setIsVisible, cartList, categories }) => {
  const { isToggled, toggle } = useToggleCart(false)
  const newTotal = cartList.reduce(
    (totalDonation, opportunity) => totalDonation + parseInt(opportunity.cost),
    0
  )

  const items = cartList.length

  return (
    <Sidebar
      animate={isToggled ? 'open' : 'closed'}
      initial="closed"
      variants={sidebarAnimation}
      setIsVisible={setIsVisible}
    >
      <CloseButton onClick={toggle} className={isToggled ? 'close' : ''}>
        <StyledCloseButtonIcon icon={isToggled ? faTimes : faShoppingCart} />
        {!isToggled && items <= 0 && <p>Cart Empty</p>}
        {!isToggled && items === 1 && <p>{items} item in cart</p>}
        {!isToggled && items > 1 && <p>{items} items in cart</p>}
      </CloseButton>
      {cartList.length === 0 ? (
        <div>
          <h3>Your cart is empty.</h3>
        </div>
      ) : (
        <>
          {categories.includes('ng') && (
            <DonationBlock>
              <h4>Next Gen</h4>
              {cartList.map(
                item =>
                  item.category === 'ng' && (
                    <DonationItem key={item.uniqueID} id={item.uniqueID}>
                      <p>{item.desc}</p>
                      <p className="bold">$ {item.cost}</p>
                    </DonationItem>
                  )
              )}
            </DonationBlock>
          )}
          {categories.includes('jk') && (
            <DonationBlock>
              <h4>Joy's Kitchen</h4>
              {cartList.map(
                item =>
                  item.category === 'jk' && (
                    <DonationItem key={item.uniqueID} id={item.uniqueID}>
                      <p>{item.desc}</p>
                      <p className="bold">$ {item.cost}</p>
                    </DonationItem>
                  )
              )}
            </DonationBlock>
          )}

          {categories.includes('cr') && (
            <DonationBlock>
              <h4>Covid Response</h4>
              {cartList.map(
                item =>
                  item.category === 'cr' && (
                    <DonationItem key={item.uniqueID} id={item.uniqueID}>
                      <p>{item.desc}</p>
                      <p className="bold">$ {item.cost}</p>
                    </DonationItem>
                  )
              )}
            </DonationBlock>
          )}
          {categories.includes('gi') && (
            <DonationBlock>
              <h4>Global Ministry</h4>
              {cartList.map(
                item =>
                  item.category === 'gi' && (
                    <DonationItem key={item.uniqueID} id={item.uniqueID}>
                      <p>{item.desc}</p>
                      <p className="bold">$ {item.cost}</p>
                    </DonationItem>
                  )
              )}
            </DonationBlock>
          )}
        </>
      )}
      <SuggestedTotal>
        <p>Click the button below and enter:</p>
        <Total>${newTotal}</Total>
        <p>and select the corresponding fund.</p>
        <DonateLink
          href="https://westwoods.churchcenter.com/giving/to/ac-next-gen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Now
        </DonateLink>
        <p className="instructions">
          *if you are donating to multiple funds you will need complete each
          transaction separately.
        </p>
      </SuggestedTotal>
    </Sidebar>
  )
}

export default Cart
