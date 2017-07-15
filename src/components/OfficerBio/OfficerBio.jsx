import React from "react"
import PropTypes from "prop-types"

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
    <li className="list-group-item list-group-item-action flex-column align-items-start">
      <h5 className="mb-1">{name}</h5>
      <h6 className="mb-1">{officerPosition}</h6>
      <p className="mb-1">Years climbing: {yearsClimbing}</p>
      <p className="mb-1">Favorite discipline: {favoriteDiscipline}</p>
      <p className="mb-1">Climbing pet peeve: {climbingPetPeeve}</p>
      <p className="mb-1">Sending food: {sendingFood}</p>
      <p className="mb-1">Favorite climbing quote: {favoriteClimbingQuote}</p>
    </li>
  )
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

export default OfficerBio
