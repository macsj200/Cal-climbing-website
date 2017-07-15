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

export default OfficerBio
