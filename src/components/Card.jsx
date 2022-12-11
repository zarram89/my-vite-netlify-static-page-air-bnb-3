function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={`./${props.img}`} width="176" height="235" alt={props.title} />
      <p className="card-info"><img src="./star.svg" width="14" height="14" alt="star" /> {props.rating} <span className="card-info-mark">({props.reviewCount}) • {props.location}</span></p>
      <h2 className="card-title">{props.title}
      </h2>
      <p className="card-price">From ${props.price} <span className="card-price-mark">/ person</span>
      </p>
    </div>
  )
}

export default Card
