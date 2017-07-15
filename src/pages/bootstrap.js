import React from "react"
import Helmet from "react-helmet"

export default class Bootstrap extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 2
          </div>
          <div className="col">
            1 of 2
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col">
            1 of 3
          </div>
          <div className="col">
            1 of 3
          </div>
        </div>
      </div>
    )
  }
}
