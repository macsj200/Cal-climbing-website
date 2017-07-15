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
  officerPhoto,
}) => {
  return (
    <li className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex justify-content-between">
        <div
          style={{ width: '50%' }}
        >
          <h5 className="mb-1">{name}</h5>
          <h6 className="mb-1">{officerPosition}</h6>
          <p className="mb-1">Years climbing: {yearsClimbing}</p>
          <p className="mb-1">Favorite discipline: {favoriteDiscipline}</p>
          <p className="mb-1">Climbing pet peeve: {climbingPetPeeve}</p>
          <p className="mb-1">Sending food: {sendingFood}</p>
          <p className="mb-1">Favorite climbing quote: {favoriteClimbingQuote}</p>
        </div>
        {
          officerPhoto &&
          <div
            style={{ width: '50%' }}
          >
            <img src={officerPhoto} className="img-fluid" alt={name} />
          </div>
        }
      </div>
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
  officerPhoto: PropTypes.string,
}

export default OfficerBio
