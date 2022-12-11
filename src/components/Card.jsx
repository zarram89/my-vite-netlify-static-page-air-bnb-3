function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "OLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={`./${props.coverImg}`} width="176" height="235" alt={props.title} />
      <p className="card-info"><img src="./star.svg" width="14" height="14" alt="star" /> {props.stats.rating} <span className="card-info-mark">({props.stats.reviewCount}) • {props.location}</span></p>
      <h2 className="card-title">{props.title}
      </h2>
      <p className="card-price">From ${props.price} <span className="card-price-mark">/ person</span>
      </p>
    </div>
  )
}

export default Card
