import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

/*
  Sample

  Name: Clara Lee
  Officer Position: competition director
  Years Climbing: 1.2 yuh
  Favorite Discipline: bouldering all the way I don't got no money for all the other gear
  Climbing Pet Peeve: someone eating something greasy and then getting on the problem
  Sending Food: chipotle tortilla
  Favorite Climbing Quote: Alex honnold after he free soloed el cap: "I'm gonna go hang board now" ?????
 */

const officerBiosData = [
  {
    name: 'Clara Lee',
    officerPosition: 'competition director',
    yearsClimbing: '1.2 yuh',
    favoriteDiscipline: 'bouldering all the way I don\'t got no money for all the other gear',
    climbingPetPeeve: 'someone eating something greasy and then getting on the problem',
    sendingFood: 'chipotle tortilla',
    favoriteClimbingQuote: 'Alex honnold after he free soloed el cap: "I\'m gonna go hang board now" ?????',
  },
];

const OfficerBio = ({
  name,
  officerPosition,
  yearsClimbing,
  favoriteDiscipline,
  climbingPetPeeve,
  sendingFood,
  favoriteClimbingQuote,
}) => {
  return (
    <div>
      <h4>{name}</h4>
      <h5>{officerPosition}</h5>
    </div>
  );
}

OfficerBio.propTypes = {
  name: PropTypes.string.isRequired,
  officerPosition: PropTypes.string.isRequired,
  yearsClimbing: PropTypes.string.isRequired,
  favoriteDiscipline: PropTypes.string.isRequired,
  climbingPetPeeve: PropTypes.string.isRequired,
  sendingFood: PropTypes.string.isRequired,
  favoriteClimbingQuote: PropTypes.string.isRequired,
}

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
