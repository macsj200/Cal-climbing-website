import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import OfficerBio from "../components/OfficerBio/OfficerBio.jsx";
import officerBiosData from "../components/OfficerBio/OfficerBioData.js";

export default class OfficerBios extends React.Component {
  render() {
    return (
      <div>
        <h1>Current Cal Climbing Officers</h1>
        <h2>Fall 2017 Semester</h2>
        {
          officerBiosData.map(officerBioData => <OfficerBio key={officerBioData.name} {...officerBioData} />)
        }
      </div>
    )
  }
}
