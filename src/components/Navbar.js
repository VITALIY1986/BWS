import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Logo from  '../../static/img/logo.svg'
const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbarContainer ">
        <div className="burgetMenu">=</div>
        <a href="#" className="logo"><img src={Logo}></img></a>
        <a href="/sample-page"><div>book</div></a>
       </nav>
    
    )}
  />
)

export default Navbar
