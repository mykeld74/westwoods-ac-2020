import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Card from '../components/card'
import Cart from '../components/cart'

const MainContainer = styled.div`
  width: 100vw;
  padding: 5vh 5vw;
`
const OpBlock = styled.div`
  margin-top: 5vh;
  padding-bottom: 5vh;
  border-bottom: 2px solid #ae9a4a;
  h2 {
    margin: 0 0 10px 0;
  }
  p {
    margin: 0 0 15px 0;
  }
`
const CardContainer = styled(motion.div)`
  width: 100%;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2vw;
`

const StyledList = styled.ul`
  li {
    margin: 0 0 5px 10px;
  }
`

const ActionCenter = styled.div`
  p {
    margin: 0;
  }
  h4 {
    margin: 0 0 5px 0;
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
  // const { isToggled, toggle } = useToggleCart(false)
  const opportunities = data.dataJson.giveTo
  const [myCart, setMyCart] = useState([])

  const handleAdd = (uniqueID, title, cost, desc, category) => {
    const newCart = myCart.concat({
      uniqueID,
      title,
      cost,
      desc,
      category,
    })
    setMyCart(newCart)
  }
  const handleRemove = (uniqueID, title, cost, desc, category) => {
    const newCart = myCart.filter(item => item.uniqueID !== uniqueID)
    setMyCart(newCart)
  }

  return (
    <Layout>
      <Cart cartList={myCart} />
      <SEO title="Advent Conspiracy" />
      <MainContainer>
        <OpBlock>
          <h2>Next Gen:</h2>
          <p>
            A gift to Next Generation Ministries offers us the opportunity to
            continue cultivating through relational ministry, a place where
            children and students are seen, known and valued. Through your
            generosity we are able to share the generous heart of God with our
            Next Generation
          </p>
          <CardContainer
            variants={staggerCards}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {opportunities.map(
              opportunity =>
                opportunity.category === 'ng' && (
                  <Card
                    key={opportunity.uniqueID}
                    id={opportunity.uniqueID}
                    title={opportunity.title}
                    cost={opportunity.cost}
                    category={opportunity.category}
                    desc={opportunity.desc}
                    addItem={handleAdd}
                    removeItem={handleRemove}
                  />
                )
            )}
          </CardContainer>
        </OpBlock>
        <OpBlock>
          <h2>Joy's Kitchen:</h2>
          <p>
            A gift to Joys Kitchen supports our efforts to rescue and distribute
            food to people who are in real need.
          </p>
          <CardContainer
            variants={staggerCards}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {opportunities.map(
              opportunity =>
                opportunity.category === 'jk' && (
                  <Card
                    key={opportunity.uniqueID}
                    id={opportunity.uniqueID}
                    title={opportunity.title}
                    cost={opportunity.cost}
                    category={opportunity.category}
                    desc={opportunity.desc}
                    addItem={handleAdd}
                    removeItem={handleRemove}
                  />
                )
            )}
          </CardContainer>
        </OpBlock>
        <OpBlock>
          <h2>COVID Response:</h2>
          <p>
            A gift to our COVID response supports our efforts to meet the needs
            of our friends struggling with homelessness, meets practical needs
            of people in our area through our community compassion fund and our
            partnership with the Action Center as well as serving our community
            and our local schools!
          </p>
          <CardContainer
            variants={staggerCards}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {opportunities.map(
              opportunity =>
                opportunity.category === 'cr' && (
                  <Card
                    key={opportunity.uniqueID}
                    id={opportunity.uniqueID}
                    title={opportunity.title}
                    cost={opportunity.cost}
                    category={opportunity.category}
                    desc={opportunity.desc}
                    addItem={handleAdd}
                    removeItem={handleRemove}
                  />
                )
            )}
          </CardContainer>
        </OpBlock>
        <OpBlock>
          <h2>Global Ministry:</h2>
          <p>
            Giving towards our global ministry partners allows us to continue to
            empower next generations of leaders in Uganda and Zimbabwe. When the
            foundation of community is shaken, children are often the most
            vulnerable as families struggle to find stability. Your gift helps
            by providing food, access to medical care, education, and community
            support for vulnerable children in Uganda and Zimbabwe. Thank you
            for your generosity and loving the least of these!
          </p>
          <p>
            Your gift provides food, medical care and education for a student:
          </p>
          <CardContainer
            variants={staggerCards}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {opportunities.map(
              opportunity =>
                opportunity.category === 'gi' && (
                  <Card
                    key={opportunity.uniqueID}
                    id={opportunity.uniqueID}
                    title={opportunity.title}
                    cost={opportunity.cost}
                    category={opportunity.category}
                    desc={opportunity.desc}
                    addItem={handleAdd}
                    removeItem={handleRemove}
                  />
                )
            )}
          </CardContainer>
        </OpBlock>
        <OpBlock>
          <h2>
            The Action Center is an incredible advocate for the vulnerable in
            our city.
          </h2>
          <p>
            If you want to partner with their efforts and provide a Christmas
            present – here are the details: HOLIDAY GIFT SHOP TOYS NEEDED:
          </p>
          <StyledList>
            <li>Remote Control Cars and Trucks</li>
            <li>Skateboards</li>
            <li>Scooters</li>
            <li>Science Kits</li>
            <li>Arts & Crafts Kits</li>
            <li>Nail & Make-Up Kits</li>
            <li>Bicycles + Helmets</li>
            <li>Legos and Nerf Toys</li>
          </StyledList>
          <ActionCenter>
            <h4>Donate your items at the Donation Dock:</h4>
            <p>8755 W 14th Ave Lakewood, CO 80215 </p>
            <p>Monday, Tuesday, Thursday, and Friday from 9 a.m. to 3 p.m.</p>
            <p>Saturdays from 9 a.m. to Noon </p>
            <p> Wednesdays and Sundays – CLOSED</p>
          </ActionCenter>
        </OpBlock>
      </MainContainer>
    </Layout>
  )
}

export const homeQuery = graphql`
  query HomePageQuery {
    dataJson {
      giveTo {
        cost
        uniqueID
        title
        category
        desc
      }
    }
  }
`
export default IndexPage
