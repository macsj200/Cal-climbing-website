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
    <div>
      <h4>{name}</h4>
      <h5>{officerPosition}</h5>
    </div>
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
