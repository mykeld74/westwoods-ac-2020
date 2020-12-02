import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Card from '../components/card'
import Cart from '../components/cart'
import { useToggleCart } from '../hooks/toggleCart'

const MainContainer = styled.div`
  width: 100vw;
  padding: 5vh 5vw;
`
const CardContainer = styled(motion.div)`
  width: 100%;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2vw;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  width: 35px;
  margin: 0;
  padding: 0;
`

const StyledCartButton = styled.button`
  height: 40px;
  background: #c03933;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  color: #fff;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0 0 0 10px;
    font-size: 0.8em;
  }
`

const staggerCards = {
  hidden: {
    transition: { staggerChildren: 0.075, staggerDirection: -1 },
  },
  show: {
    transition: { staggerChildren: 0.075, staggerDirection: 1 },
  },
  hover: {},
  active: {},
}

const IndexPage = ({ data }) => {
  const { isToggled, toggle } = useToggleCart(false)
  const opportunities = data.dataJson.giveTo
  const [myCart, setMyCart] = useState([])

  const handleAdd = () => {
    const newCart = myCart.concat({
      id: 'id',
      title: 'title',
      cost: 'cost',
    })
    setMyCart(newCart)
  }
  return (
    <Layout>
      <Cart isOpen={isToggled} setIsVisible={toggle} cartList={myCart} />
      <SEO title="Home" />
      <StyledCartButton onClick={toggle}>
        <StyledIcon icon={faShoppingCart} />
        <p>View Cart</p>
      </StyledCartButton>
      <MainContainer>
        <CardContainer
          variants={staggerCards}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {opportunities.map(opportunity => (
            <Card
              key={opportunity.id}
              title={opportunity.title}
              description={opportunity.description}
              cost={opportunity.cost}
              addItem={handleAdd}
            />
          ))}
        </CardContainer>
      </MainContainer>
    </Layout>
  )
}

export const homeQuery = graphql`
  query HomePageQuery {
    dataJson {
      giveTo {
        cost
        description
        id
        title
      }
    }
  }
`
export default IndexPage
