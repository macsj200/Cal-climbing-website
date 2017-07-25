import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import OfficerBio from "../components/OfficerBio/OfficerBio.jsx";
import officerBiosData from "../components/OfficerBio/OfficerBioData.js";

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Cal Climbing Website</h1>
            <p>
              This is the official website for Cal Climbing, the climbing club at <a href="http://www.berkeley.edu/">UC Berkeley</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Cal Climbing Waiver</h1>
            <a href="https://drive.google.com/file/d/0B11WQbRQEj5FUG9TT2J0azdVcGM/view">Waiver PDF Link</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Current Cal Climbing Officers</h1>
            <h2>Fall 2017 Semester</h2>
            <ul className="list-group">
              {
                officerBiosData.map(officerBioData => <OfficerBio key={officerBioData.name} {...officerBioData} />)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
