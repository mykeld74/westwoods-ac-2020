import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledHeader = styled.header`
  background: #fff;
  border-bottom: 4px solid #c03933;
  h1,
  p {
    margin: 0;
    text-align: center;
  }
  h1 {
    font-size: clamp(22px, 2.8vw, 36px);
    color: #c03933;
  }
  p {
    margin-top: 20px;
    color: #ae9a4a;
    font-size: clamp(16px, 2vw, 22px);
    font-family: 'Sansita Swashed', cursive;
  }
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px 5vw;
`

const Logos = styled(Img)`
  width: 100%;
`

const Header = ({ siteTitle }) => {
  const logoQuery = useStaticQuery(graphql`
    query HeaderQuery {
      logo: imageSharp(fluid: { originalName: { eq: "ww-logo.png" } }) {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
      acLogo: imageSharp(fluid: { originalName: { eq: "ac_logo.png" } }) {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logos fluid={logoQuery.logo.fluid} />
        <div>
          <h1>Westwoods Community Church</h1>
          <h1>Advent Conspiracy</h1>
          <p>Spend Less, Give More, Love All, Worship Fully!</p>
        </div>
        <div>
          <Logos fluid={logoQuery.acLogo.fluid} />
        </div>
      </HeaderContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
