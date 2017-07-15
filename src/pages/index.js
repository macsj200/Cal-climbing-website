import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Cal Climbing Website</h1>
        <p>
          This is the official website for Cal Climbing, the climbing club at <a href="http://www.berkeley.edu/">UC Berkeley</a>.
        </p>
        <Link to="/officer-bios/">Current officers</Link>
      </div>
    )
  }
}
