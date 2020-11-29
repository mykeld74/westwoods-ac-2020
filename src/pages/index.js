import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Card from '../components/card'
import Cart from '../components/cart'

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
`

const StyledCartButton = styled.button`
  width: 50px;
  height: 50px;
  background: #c03933;
  border: none;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
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
  const opportunities = data.dataJson.giveTo
  const [isOpen, setisOpen] = useCycle(false, true)
  return (
    <Layout>
      <Cart isOpen={isOpen} />
      <SEO title="Home" />
      <StyledCartButton onClick={() => setisOpen()}>
        <StyledIcon icon={faShoppingCart} />
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
